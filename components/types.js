"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export const Types = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://admin-djstage.vercel.app/api/types/list-types");
        setTypes(response.data.types);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="font-sans bg-white px-4 py-8">
      <div className="mx-auto lg:max-w-6xl md:max-w-4xl">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">Top Types</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-y-6">
          {Array.isArray(types) && types.slice(0, 7).map((type) => (
            <div key={type.id} className="flex flex-col items-center">
              <div className="w-full overflow-hidden mx-auto">
                <Image
                  width={250}
                  height={250}
                  src={type.image} 
                  alt={type.title} 
                  className="bg-gray-100 border rounded-full p-3 h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:w-32 xl:h-32 mx-auto block object-contain" 
                />
              </div>
              <div className="text-center mt-2 flex justify-center">
                <h3 className="text-sm font-bold text-gray-800 max-w-24 text-center">{type.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
