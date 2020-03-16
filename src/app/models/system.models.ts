export enum Roles {
  doctor = 'Doctor',
  nurse = 'Nurse'
}

export enum AppointmentType {
  check = 'check',
  consultation = 'consultation',
  prescription = 'prescription'
}

export enum Relationship {
  family = 'Family',
  husband = 'Husband',
  wife = 'Wife'
}

export function enumSelector(definition) {
  return Object.keys(definition)
    .map(key => ({value: definition[key], title: key}));
}
