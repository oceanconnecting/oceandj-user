import Link from "next/link";
import LogoWhite from "@/images/Logo-White.png";
import Image from "next/image"

export const Footer = () => {
  const navigationItems = [
    {
      title: "Menu",
      description: "",
      items: [
        {
          title: "Home",
          href: "/",
        },
        {
          title: "Products",
          href: "/",
        },
        {
          title: "About Us",
          href: "/about-us",
        },
        {
          title: "Contact Us",
          href: "/contact-us",
        },
      ],
    },
    {
      title: "Company",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Reports",
          href: "/reports",
        },
        {
          title: "Statistics",
          href: "/statistics",
        },
        {
          title: "Dashboards",
          href: "/dashboards",
        },
      ],
    },
    {
      title: "Terms",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Privacy Policy",
          href: "/",
        },
        {
          title: "Terms & Conditions",
          href: "/",
        },
        {
          title: "Licenses",
          href: "/",
        },
      ],
    },
  ];

  return (
    <div className="w-full py-16 lg:py-28 bg-black text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <Image width={200} height={100} src={LogoWhite} alt="Logo" className="w-36 md:w-40 lg:w-44 xl:w-48" />
              <p className="max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                Dj Stage the music store number one in Morocco.
              </p>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <p>Phone: 0123-456-789</p>
                <p>Email: dj-stage@gmail.com</p>
                <p>Address: Agadir, Morocco </p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex gap-1 flex-col items-start"
              >
                <div className="flex flex-col gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex justify-between items-center"
                    >
                      <span className="">{item.title}</span>
                    </Link>
                  ) : (
                    <p className="">{item.title}</p>
                  )}
                  {item.items &&
                    item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-background/75">
                          {subItem.title}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};