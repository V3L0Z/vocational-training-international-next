import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-blue-950 text-base-content">
      <aside>
        <Image src="/images/globe-light.svg" alt="#" height={50} width={50} />
        <h1 className="text-slate-300 text-xl font-bold ">
          Vocational Training International
        </h1>

        <p className="text-slate-300 text-md">Since 1990.</p>
      </aside>
      <nav>
        <h6 className="text-slate-300 footer-title">Services</h6>
        <a className="text-slate-300 link link-hover">Branding</a>
        <a className="text-slate-300 link link-hover">Design</a>
        <a className="text-slate-300 link link-hover">Marketing</a>
        <a className="text-slate-300 link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="text-slate-300 footer-title">Company</h6>
        <a className="text-slate-300 link link-hover">About us</a>
        <a className="text-slate-300 link link-hover">Contact</a>
        <a className="text-slate-300 link link-hover">Jobs</a>
        <a className="text-slate-300 link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="text-slate-300 footer-title">Legal</h6>
        <a className="text-slate-300 link link-hover">Terms of use</a>
        <a className="text-slate-300 link link-hover">Privacy policy</a>
        <a className="text-slate-300 link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
}
