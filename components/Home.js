
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-6 text-center space-y-6">
      <Image src="/LogoSuperman.png" alt="Logo" width={150} height={150} className="mx-auto" />
      <h1 className="text-4xl font-bold">Superman Painting LLC</h1>
      <p className="text-lg">Residential, Commercial & Industrial Painting Contractor</p>
      <div className="space-x-4">
        <Link href="/about" className="text-blue-600 hover:underline">About Us</Link>
        <Link href="/services" className="text-blue-600 hover:underline">Services</Link>
        <Link href="/gallery" className="text-blue-600 hover:underline">Gallery</Link>
        <Link href="/quote" className="text-blue-600 hover:underline">Request a Quote</Link>
        <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
      </div>
    </div>
  );
}
