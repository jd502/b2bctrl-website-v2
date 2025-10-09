import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Light Mode */}
      <Image
        src="/b2bctrl_logo.svg"
        alt="B2BCTRL Logo Light"
        width={200}
        height={60}
        className="logo-light"
        priority
      />
      {/* Dark Mode */}
      <Image
        src="/b2bctrl_logo_dark_w_green.svg"
        alt="B2BCTRL Logo Dark"
        width={200}
        height={60}
        className="logo-dark rounded-xl"
        priority
      />
    </div>
  );
}
