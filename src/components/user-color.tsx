import { Color } from "@/types"

type UserColorProps = {
  color: Color;
};

export const UserColor = ({ color }: UserColorProps) => {
  return (
    <div>
      <h3 className="text-lg">{color.name}</h3>
      <div className="w-full h-44 flex">
        {color.hexValues.map(h =>
          <div key={h} className={`w-[10%] text-center text-sm py-2`} style={{backgroundColor: h}}>
            {h}  
          </div>  
        )}
      </div>
    </div>
  );
}