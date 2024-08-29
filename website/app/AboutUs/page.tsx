import Image from "next/image";

export default function AboutUs() {
  return (
    <div className=" text-white py-24 px-6 max-w-7xl mx-auto relative -z-20">
      <Image
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt="Modern cityscape with office buildings"
        className="absolute inset-0 w-full h-full cover -z-10 opacity-90"
        width={200}
        height={100}
      />
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Who We Are</h1>
        <p className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed mb-6">
          VizualTech Solutions is an established leader in Building Management Systems (BMS) services, partnering with System Integrators and Partners globally.
        </p>
      </div>
      <div className="px-6 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Our Expertise</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-center">Engineering Services</h3>
            <hr className="my-2 border-gray-600 sm:mx-auto dark:border-gray-600" />
            <p className="text-center">
              We provide detailed engineering control drawings, DDC application programming, and user-friendly front-end graphics, dashboards, and remote start-up/commissioning services.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-center">Technology and Platforms</h3>
            <hr className="my-2 border-gray-600 sm:mx-auto dark:border-gray-600" />
            <p className="text-center">
              Our solutions include working with industry-standard protocols such as BACnet, Lonworks, Modbus, KNX, SNMP, OPC, M-bus, and flexibility in using products from a multitude of vendors including Honeywell, Alerton, TREND, Centraline, and Tridium OEMs.
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us</h2>
        <p className="text-lg leading-relaxed text-center">
          Our team has hands-on experience in engineering, commissioning, operations, and maintenance of various building automation systems, ensuring that we deliver high-performance and scalable solutions tailored to meet the specific needs of our clients.
        </p>
      </div>
    </div>
  );
}
