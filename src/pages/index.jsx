import React from "react";
import Navbar from "@/components/Navbar";
import Placeholder from "@/components/Placeholder";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Placeholder title="Asam Lambung" desc="Aplikasi kami membantu anda!" button="Pelajari Lebih Lanjut" />
    </div>
  );
}
