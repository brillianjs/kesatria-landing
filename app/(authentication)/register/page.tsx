/**
 * v0 by Vercel.
 * @see https://v0.dev/t/HmuSOEYPXyP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <div className="mx-auto max-w-md space-y-6 px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Daftar akun Kesatria</h1>
        <p className="text-muted-foreground">
          Buat akun Dicoding untuk memulai belajar.
        </p>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nama Lengkap</Label>
          <Input
            id="name"
            placeholder="Masukkan nama asli Anda, nama akan digunakan pada data sertifikat"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Alamat Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Gunakan alamat email aktif Anda"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Masukkan password baru, gunakan minimal 8 karakter dengan kombinasi huruf dan angka"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Daftar
        </Button>
      </form>
      <div className="space-y-4">
        <Button variant="outline" className="w-full">
          <ChromeIcon className="mr-2 h-4 w-4" />
          Daftar dengan Google
        </Button>
        <div className="text-center text-sm text-muted-foreground">
          Sudah punya akun?{" "}
          <Link href="/login" prefetch={false}>
            Masuk sekarang
          </Link>
        </div>
        <div className="text-center text-xs text-muted-foreground">
          Dengan melakukan pendaftaran, Anda setuju dengan syarat & ketentuan
          Dicoding.
        </div>
        <div className="text-center text-xs text-muted-foreground">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </div>
      </div>
    </div>
  );
}

function ChromeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}
