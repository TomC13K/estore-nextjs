import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import db from "@/src/db/db";
import { formatCurrency, formatNumber } from "../../lib/formatters";

async function getSalesData() {
  const data = await db.order.aggregate({
    _sum: { pricePaidInCents: true },
    _count: true,
  });
  //await wait(2000)

  return {
    amount: (data._sum.pricePaidInCents || 0) / 100,
    numberOfSales: data._count,
  };
}

// helper function to wait for some time to simulate loading
function wait(duration: number) {
  return new Promise(resolve => 
    setTimeout(resolve, duration));
}

async function getUserData() {
  // 2 awaits are slow so better to have promise

  // const userCount = await db.user.count()
  // const orderData = await db.order.aggregate({
  //   _sum: {pricePaidInCents: true},
  // })

  const [userCount, orderData] = await Promise.all([
    db.user.count(),
    db.order.aggregate({
      _sum: { pricePaidInCents: true },
    }),
  ]);

  return {
    userCount,
    averaValuePerUSer:
      userCount === 0 ? 0 : (orderData._sum.pricePaidInCents || 0) / userCount /100,
  };
}

async function getProductData() {
  // db.product.count({where: {isAvailableForPurchase: true}})
  // db.product.count({where: {isAvailableForPurchase: false}})

  const [activeCount, inactiveCount ] = await Promise.all([
    db.product.count({where: {isAvailableForPurchase: true}}),
    db.product.count({where: {isAvailableForPurchase: false}})
  ]);

  return {activeCount, inactiveCount}
}

export default async function AdminDashboard() {
  // again use Promise for better performance, rather than 2x await
  // const salesData = await getSalesData();
  // const userData = await getUserData();

  const [ salesData, userData, productData ] = await Promise.all([
    getSalesData(),
    getUserData(),
    getProductData()
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard
        title="Sales"
        subtitle={`${formatNumber(salesData.numberOfSales)} Orders`}
        body={formatCurrency(salesData.amount)}
      />
      <DashboardCard
        title="Customers"
        subtitle={`${formatCurrency(userData.averaValuePerUSer)} Average Value`}
        body={formatNumber(userData.userCount)}
      />

      <DashboardCard
        title="Active Products"
        subtitle={`${formatNumber(productData.inactiveCount)} Inactive`}
        body={formatNumber(productData.activeCount)}
      />
    </div>
  );
}

type DashboardCardProps = {
  title: string;
  subtitle: string;
  body: string;
};

function DashboardCard({ title, subtitle, body }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  );
}
