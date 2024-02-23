/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/
type union = string | number;
let union: union;
union = 1;
union = "my";

type literal = "enable" | "disable";
let literal: literal;
literal = "disable";
literal = "enable";

enum Literal {
  enable = "enable",
  disable = "disable",
}

let literal_2: Literal;
literal_2 = Literal.disable;
literal_2 = Literal.enable;
