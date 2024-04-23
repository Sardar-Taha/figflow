import Image from "next/image";
import logo from "@/assets/welcome-logo.png";
import Label from "@/src/components/label";
import InputComponent from "@/src/components/input";
import SelectComponent from "@/src/components/select";
import ButtonComp from "@/src/components/button";

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto px-4 flex justify-center items-center">
      <div className="w-full sm:w-[520px] border border-borderDarkColor rounded-lg p-4 sm:p-8">
        <Image
          src={logo}
          draggable={false}
          alt="logo"
          className="select-none mx-auto mt-4"
        />

        <h2 className="text-white text-2xl font-semibold mt-8 text-center">
          Welcome to Figflow
        </h2>
        <p className="text-base mt-4 text-lightGrayish text-center">
          Tell us more about yourself
        </p>

        <div className="mt-12">
          <Label text="Workspace name" />
          <InputComponent placeholder="Name of your company" />

          <div className="mt-8">
            <Label text="Size of your company or organization" />
            <SelectComponent
              placeholder="Select"
              optionsArray={["11-15", "22-25", "30 -40"]}
            />
          </div>

          <div className="mt-8">
            <Label text="Your role" />
            <SelectComponent
              placeholder="Select"
              optionsArray={["Role 1", "Role 2", "Role 3"]}
            />
          </div>

          <div className="mt-8 pb-4">
            <ButtonComp text="Continue to next step" />
          </div>
        </div>
      </div>
    </main>
  );
}
