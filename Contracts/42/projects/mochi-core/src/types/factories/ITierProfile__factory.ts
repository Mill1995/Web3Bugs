/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITierProfile, ITierProfileInterface } from "../ITierProfile";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "discount",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "numerator",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "denominator",
            type: "uint256",
          },
        ],
        internalType: "struct float",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ITierProfile__factory {
  static readonly abi = _abi;
  static createInterface(): ITierProfileInterface {
    return new utils.Interface(_abi) as ITierProfileInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITierProfile {
    return new Contract(address, _abi, signerOrProvider) as ITierProfile;
  }
}
