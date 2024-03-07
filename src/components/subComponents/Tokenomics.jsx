import React from 'react'
import { SimplyDonut } from "react-simply-donut/donuts";

function Tokenomics() {
  const data = [
    {
      value: 80,
      name: "Crowdsale investors",
      color: "#0082FF",
    },
    {
      value: 20,
      name: "Foundation",
      color: "#FFA002",
    },
  ];
  return (
    <div className='bg-white rounded-md p-6 max-lg:px-2 max-lg:py-3'>
      <div className='font-semibold text-xl'>Tokenomics</div>
      <div>
        <div className='font-semibold my-3'>Initial Distribution</div>
        <div className='flex justify-start items-center'>
          <div className='w-1/4'>
            <SimplyDonut data={data} size="sm" inset={{ color: "#fff", size: 14 }} />
          </div>
          <div className='w-1/4'>
            {data.map((item) => {
              return (
                <>
                  <div className='flex justify-start items-center'>
                    <div className='rounded-full w-4 aspect-square mr-3' style={{ backgroundColor: `${item.color}` }}></div>
                    <div>{item.name} : {item.value}%</div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
      <div className='mt-3'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque ipsa adipisci ratione recusandae consequuntur! Illum molestiae qui enim tempora ab. Deserunt suscipit illo rem debitis quas velit commodi itaque dolorum iusto reprehenderit. Eum, nulla a? Repellat unde odit quaerat aut dicta tenetur quod pariatur, veritatis voluptatibus omnis iure? Magni commodi tempora voluptatibus unde. Nemo, blanditiis harum dolorum soluta quisquam dolore ullam debitis aliquam accusantium? Illo vel eum nulla. Quibusdam natus doloremque nam mollitia consectetur doloribus nemo rem veritatis. Eveniet vitae odio sunt vero veniam, maxime vel iusto illum quis debitis, nisi repudiandae perspiciatis ex repellendus? Repellendus optio aliquid itaque labore, quos quis facilis architecto quae reprehenderit veniam ex quo, minima ea necessitatibus accusamus animi aliquam. Consectetur, sed ea possimus maiores at totam facere aliquam, culpa tempora qui vitae praesentium molestiae! Modi, veritatis velit fugiat, dolorem impedit ullam saepe doloremque nobis, tempora eius vel molestias dolorum ipsum? Deleniti tempora delectus ab.
      </div>
    </div>
  )
}

export default Tokenomics