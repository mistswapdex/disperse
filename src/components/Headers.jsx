import { useContext } from "react";
import { NetworkContext } from "../App";
//import EthereumSVG from "../assets/ethereum.svg";
import DogechainSVG from "../assets/dogechain.png";
import DisperseSVG from "../assets/disperse.png";

const Header = ({ address }) => {
  const networkContext = useContext(NetworkContext);
  return (
    <div class="text-center sm:text-left">
      <div className="flex space-between">
        <img
          src={DogechainSVG}
          style={{
            width: "64px",
            height: "64px",
            marginLeft: "0px",
          }}
          alt="Dogechain logo"
        />
        <h2 className="mt-8 text-4xl font-light">Disperse</h2><br></br>
        <p>Much wow!</p><br></br>
        {address && (
          <span className="text-l pt-2 font-light">
            {networkContext.network || "🤔"}
          </span>
        )}
      </div>
      <div>
        <img
          src={DisperseSVG}
          style={{
            width: "64px",
            height: "64px",
            marginLeft: "0px",
          }}
          alt="Disperse logo"
        />
      </div>
      <p className="pt-8 text-l font-light">
        Distribute WDOGE or tokens to multiple addresses on <a href="https://dogechain.dog">Dogechain</a><br></br><br></br>
        Contract address (verified): <a href="https://explorer.dogmoney.money/address/0x63C8f8A8Dfaf72c22753285534e36718c4fe4F5C/contracts">0x63c8f8a8dfaf72c22753285534e36718c4fe4f5c</a><br></br>
        Github <a href="https://github.com/mazetoken/disperse">repository</a><br></br>
      </p>
    </div>
  );
};

export default Header;