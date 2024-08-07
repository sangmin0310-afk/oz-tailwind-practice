export default function Header() {
  return (
    <header className="flex justify-between items-center p-2.5 bg-black">
      <h2>OZ코딩스쿨</h2>
      {/* 
      <ul className="menu-container">
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
      */}
      <ul className="flex justify-center items-center gap-5">
        <li className="list-none font-normal text-xs">로그인</li>
        <li className="list-none font-normal text-xs">회원가입</li>
        <li className="list-none font-normal text-xs">내클래스</li>
      </ul>
    </header>
  );
}
