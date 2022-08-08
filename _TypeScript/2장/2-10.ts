type Foot = number;
type Pound = number;

type Patient = {
    name: string;
    height: Foot;
    weight?: Pound;
}

let patient: Patient = {
    name: 'Joe Smith',
    height: 5,
}