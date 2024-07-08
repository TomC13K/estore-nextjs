"use client";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";
import { formatCurrency } from "@/src/lib/formatters";
import { useState } from "react";
import { addProduct } from "../../_actions/products";

export function ProductForm() {
  const [priceInCents, setPriceInCents] = useState<number>(); // blank input by default - can be undefined below

  return (
    <form action={addProduct} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" required></Input>
      </div>
      <div className="space-y-2">
        <Label htmlFor="priceInCents">PriceInCents</Label>
        <Input
          type="number"
          id="priceInCents"
          required
          value={priceInCents}
          onChange={(e) => setPriceInCents(Number(e.target.value) || undefined)}
        />
        <div className="text-muted-foreground">
          {formatCurrency((priceInCents || 0) / 100)}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" required></Textarea>
      </div>
      <div className="space-y-2">
        <Label htmlFor="file">File</Label>
        <Input type="file" name="file" required></Input>
      </div>
      <div className="space-y-2">
        <Label htmlFor="image">Image</Label>
        <Input type="file" name="image" required></Input>
      </div>
      <Button type="submit">Save</Button>
    </form>
  );
}
