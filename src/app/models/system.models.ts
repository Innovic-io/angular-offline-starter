export enum Roles {
  doctor = 'Doctor',
  nurse = 'Nurse'
}

export enum AppointmentType {
  check = 'Check',
  consultation = 'Consultation',
  prescription = 'Prescription'
}

export function enumSelector(definition) {
  return Object.keys(definition)
    .map(key => ({value: definition[key], title: key}));
}
