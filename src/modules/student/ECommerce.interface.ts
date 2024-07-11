export type EVariants={
  type: string;
  value: string;
}

export type EInventory={
  quantity: number;
  inStock: boolean;
}

export type EProducts= {
  name: string;
  description : string;
  price : number;
  category: string;
  tags :[string];
  variants :[EVariants];
  inventory: EInventory
}