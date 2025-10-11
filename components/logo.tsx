import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/b2bctrl_logo_wht_blk_green.svg"
        alt="B2BCTRL Logo"
        width={200}
        height={60}
        priority
      />
    </div>
  );
}
