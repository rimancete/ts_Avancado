// Generics padrão no TypeScript
// Record
const objeto1: Record<string, string | number> = {
  nome: 'Osvaldo',
  sobrenome: 'Costa',
  idade: 35,
};

console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required
type PessoaRequired = Required<PessoaProtocol>;
// Partial
type PessoaPartial = Partial<PessoaRequired>;
// Readonly
type PessoaReadonly = Readonly<PessoaRequired>;
// Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
  nome: 'Osvaldo',
  sobrenome: 'Costa',
  idade: 35,
};

console.log(objeto2);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

//
type AccountMong = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

type AccountApi = Pick<AccountMong, Exclude<keyof AccountMong, '_id'>> & {
  id: string;
};

const accountMongo: AccountMong = {
  _id: 'sadf34-5sdf45',
  nome: 'Osvaldo',
  idade: 35,
  sobrenome: 'Costa',
};

function mapAccount(accountMongo: AccountMong): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API', accountApi);

// Module mode
export default 1;
