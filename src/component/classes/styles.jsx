const buttonStyles = (type) =>`${type === 'green' ? 'border-[#21AB68] bg-green-400 shadow-greenButton text-white' : 'border-[#E8E8EA] bg-white shadow-buttonDefault'}
p-2 px-3 text-[#0B0B00] text-center text-14 font-medium border cursor-pointer
`;
const inputStyles = (type) => `${
  type ? "border-error shadow-error" : "border-green-100 shadow-buttonDefault"}
   border w-full h-10 flex items-center px-3 text-grey-800 text-14 font-medium outline-none focus:ring-green-400 focus:shadow-buttonFocus
`;

const selectStyles = (type) => `${
  type ? "border-error shadow-error" : "border-green-100 shadow-buttonDefault"
}
appearance-none row-start-1 col-start-1 border h-10 flex items-center px-3 hover:border-green-400 text-grey-800 text-16 font-medium  outline-none focus:ring-green-400 focus:shadow-buttonFocus`;

export { inputStyles, buttonStyles, selectStyles };
