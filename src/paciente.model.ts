export class Paciente {
  //id: number gerado automaticamente e único,Patient's name: string não precisa ser único, birth date: date, email: email unico and address: string
  id: number;
  name: string;
  birthDate: string;
  email: string;
  address: string;

  constructor(name: string, birthDate: string, email: string, address: string) {
    this.name = name;
    this.birthDate = birthDate;
    this.email = email;
    this.address = address;
  }
}
