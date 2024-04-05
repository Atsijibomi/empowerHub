import Link from "next/navigation";

const Footer = () => {
  return (
    <div className="mb-8 mt-8 border-b border-t border-slate-300 p-6">
      <div className="flex items-center justify-center">
        <h1 className="font-medium tracking-tight text-slate-900">
          Thanks for visiting EmpowerHub
          <span className="text-md ml-2 font-light">©2024</span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
