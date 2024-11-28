import React from 'react';

interface ChildProps {
  name: string;
  cast: string;
  age: number;
  qualification: string;
  gender: string;
}

const Child: React.FC<ChildProps> = (props) => {
  return (
    <div className="flex justify-center p-4">
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white h-auto font-sans font-bold shadow-lg shadow-gray-400 rounded-lg">
          <h3 className="text-center text-xl md:text-2xl lg:text-3xl text-[#044e83] p-4">
            INFORMATION DATA
          </h3>
          <div className="p-5 space-y-4">
            <h3 className="text-sm md:text-base lg:text-lg p-2">
              Name: <span className="font-bold text-gray-700">{props.name}</span>
            </h3>
            <h3 className="text-sm md:text-base lg:text-lg p-2">
              Surname: <span className="font-bold text-gray-700">{props.cast}</span>
            </h3>
            <h3 className="text-sm md:text-base lg:text-lg p-2">
              Age: <span className="font-bold text-gray-700">{props.age}</span>
            </h3>
            <h3 className="text-sm md:text-base lg:text-lg p-2">
              Qualification: <span className="font-bold text-gray-700">{props.qualification}</span>
            </h3>
            <h3 className="text-sm md:text-base lg:text-lg p-2">
              Gender: <span className="font-bold text-gray-700">{props.gender}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Child;