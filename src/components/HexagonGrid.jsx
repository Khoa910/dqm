import "../css/shapes.css"

export function HexagonGrid() {
  return (
    <div className="absolute inset-0 z-0">
        {/* Lục giác 1 - góc trái trên */}
        <div className="absolute top-[-12%] right-[-10%] w-[250px] h-[250px] bg-gradient-to-br from-[#FFFCD5]/10 to-[#FFFCD5] opacity-70 hexagon rotate-90 border-s-white border-3"></div>

        {/* Lục giác 2 - góc phải trên */}
        <div className="absolute top-[32%] right-[-10%] w-[250px] h-[250px] bg-gradient-to-br from-[#FFFCD5]/10 to-[#FFFCD5] opacity-60 hexagon rotate-90 border-s-white border-3"></div>

        {/* Lục giác 3 - góc phải dưới */}
        <div className="absolute top-[10%] right-[3%] w-[250px] h-[250px] bg-gradient-to-br from-[#FFFCD5]/10 to-[#FFFCD5] opacity-55 hexagon rotate-90 border-s-white border-3"></div>
    </div>
  );
}
