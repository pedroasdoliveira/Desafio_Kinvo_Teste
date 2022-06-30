import * as Style from "./Header-style";
import Logo from "../../assets/imgs/logo.png";
import Saldo from '../../assets/icon/saldo.svg'
import Arrow from '../../assets/icon/arrow-up.svg'
import Stoke from '../../assets/icon/stoke.svg'
import ArrowDown from '../../assets/icon/arrow-down.svg'
import Menu from '../../assets/icon/menu.svg'

const Header = () => {
  return (
    <Style.Header>
     <Style.HeaderLogo src={Logo} alt='' />

     <Style.HeaderSection>

      <Style.HeaderDiv>

        <Style.HeaderComponents>
          <Style.HeaderImg src={Saldo} alt="" />
        </Style.HeaderComponents>

        <Style.HeaderComponents>

          <p>Saldo Bruto</p>
          <Style.HeaderDescrip>130.521.230,02</Style.HeaderDescrip>

        </Style.HeaderComponents>

      </Style.HeaderDiv>

      <Style.HeaderDiv>

        <Style.HeaderComponents>
          <Style.HeaderImg src={Arrow} alt='' />
        </Style.HeaderComponents>

        <Style.HeaderComponents>
          <p>Valor Aplicado</p>
          <Style.HeaderDescrip>521.230,02</Style.HeaderDescrip>
        </Style.HeaderComponents>

      </Style.HeaderDiv>

      <Style.HeaderDiv>

        <Style.HeaderComponents>
          <Style.HeaderImg src={Stoke} alt='' />
        </Style.HeaderComponents>

        <Style.HeaderComponents>
          <p>Rentabilidade</p>
          <Style.HeaderDescrip>2,34%</Style.HeaderDescrip>
        </Style.HeaderComponents>

      </Style.HeaderDiv>

      <Style.HeaderDiv>

        <Style.HeaderComponents>
          <Style.HeaderImg src={ArrowDown} alt='' />
        </Style.HeaderComponents>

        <Style.HeaderComponents>
          <p>Carteira</p>
          <Style.HeaderDescrip>Minha Carteira</Style.HeaderDescrip>
        </Style.HeaderComponents>

      </Style.HeaderDiv>

      <Style.HeaderDiv>

        <Style.HeaderComponents>
          <Style.HeaderImg src={Menu} alt='' />
        </Style.HeaderComponents>

      </Style.HeaderDiv>

     </Style.HeaderSection>

    </Style.Header>
  );
};

export default Header;
