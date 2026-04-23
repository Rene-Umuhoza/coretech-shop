import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LaptopShop() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "HP EliteBook 840 G3",
      specs: "i5 6th Gen, 8GB RAM, 256GB SSD",
      price: 300000,
    },
    {
      id: 2,
      name: "Dell Latitude 5480",
      specs: "i5 7th Gen, 8GB RAM, 256GB SSD",
      price: 320000,
    },
    {
      id: 3,
      name: "Lenovo ThinkPad T460",
      specs: "i5 6th Gen, 8GB RAM, 256GB SSD",
      price: 280000,
    },
    {
      id: 4,
      name: "HP ProBook 650 G2",
      specs: "i5 6th Gen, 8GB RAM, 500GB HDD",
      price: 250000,
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <header className="bg-blue-700 text-white p-6 text-center">
        <h1 className="text-2xl font-bold">CORETECH GROUP LTD</h1>
        <p>Laptops • Computers • Accessories</p>
      </header>

      {/* CART */}
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold">🛒 Cart: {cart.length} items</h2>
        <p className="text-blue-700 font-bold">Total: {total.toLocaleString()} RWF</p>
        <a
          href={`https://wa.me/250781296464?text=Hello%20CORETECH%20I%20want%20to%20buy%20laptops%20Total:%20${total}`}
          target="_blank"
        >
          <Button className="mt-2 bg-green-600">Order via WhatsApp</Button>
        </a>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {products.map((p) => (
          <Card key={p.id} className="shadow-lg">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="text-sm text-gray-600">{p.specs}</p>
              <p className="text-blue-700 font-bold mt-2">
                {p.price.toLocaleString()} RWF
              </p>
              <Button
                className="mt-3 w-full"
                onClick={() => addToCart(p)}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* FOOTER */}
      <footer className="text-center p-4 bg-gray-900 text-white">
        © 2026 CORETECH GROUP LTD
      </footer>
    </div>
  );
}
