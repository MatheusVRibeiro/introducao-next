'use client';

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="containerNotFound">
      <h1>Página não encontrada!</h1>
      <p>A página que você está procurando não existe.</p>
      <Link href="/">Voltar para a página inicial</Link>
    </div>
  );
}
