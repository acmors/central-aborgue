const Header = () =>{
    return(
        <div className="bg-[#161410]">
            <div className="w-full md:w-[1500px] p-3 md:p-0 mx-auto flex items-center justify-between">
                <img src="./public/logoo.png" alt="aborgue-logo" className="w-25 h-auto"/>
                <div className="bg-[#F2DAAC] w-32.5 h-8.75 flex items-center justify-center rounded-sm cursor-pointer">Entrar</div>
            </div>
        </div>
    );
}


export default Header;