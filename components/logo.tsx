import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/b2bctrl_logo_wht_blue.svg"
        alt="B2BCTRL Logo"
        width={140}
        height={42}
        priority
        className="rounded-lg"
      />
    </div>
  );
}
