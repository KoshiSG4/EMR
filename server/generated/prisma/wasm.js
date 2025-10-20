
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  passwordHash: 'passwordHash',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  token: 'token',
  userId: 'userId',
  revoked: 'revoked',
  createdAt: 'createdAt',
  expiredAt: 'expiredAt'
};

exports.Prisma.PatientScalarFieldEnum = {
  userId: 'userId',
  fullName: 'fullName',
  dateOfBirth: 'dateOfBirth',
  gender: 'gender',
  phone: 'phone',
  address: 'address',
  emergencyContact: 'emergencyContact',
  insuranceDetails: 'insuranceDetails'
};

exports.Prisma.DoctorScalarFieldEnum = {
  userId: 'userId',
  specialization: 'specialization'
};

exports.Prisma.NurseScalarFieldEnum = {
  userId: 'userId',
  shift: 'shift',
  department: 'department'
};

exports.Prisma.AdminScalarFieldEnum = {
  userId: 'userId',
  permissions: 'permissions'
};

exports.Prisma.DiagnosisScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  status: 'status'
};

exports.Prisma.HistoryScalarFieldEnum = {
  id: 'id',
  patientId: 'patientId',
  chronicConditions: 'chronicConditions',
  pastIllnesses: 'pastIllnesses',
  surgeries: 'surgeries',
  hospitalizations: 'hospitalizations',
  familyHistory: 'familyHistory',
  lifestyle: 'lifestyle',
  smokingStatus: 'smokingStatus',
  smokingNotes: 'smokingNotes',
  alcoholUse: 'alcoholUse',
  alcoholNotes: 'alcoholNotes',
  drugUse: 'drugUse',
  drugNotes: 'drugNotes',
  diet: 'diet',
  dietNotes: 'dietNotes',
  occupation: 'occupation',
  allergies: 'allergies',
  obstetricHistory: 'obstetricHistory',
  menstrualHistroy: 'menstrualHistroy',
  immunizations: 'immunizations',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  recordedBy: 'recordedBy'
};

exports.Prisma.MedicalRecordScalarFieldEnum = {
  id: 'id',
  notes: 'notes',
  createdAt: 'createdAt',
  status: 'status',
  type: 'type',
  patientId: 'patientId',
  doctorId: 'doctorId',
  diagnosisId: 'diagnosisId',
  clinicalDetailsId: 'clinicalDetailsId'
};

exports.Prisma.VitalsRecordScalarFieldEnum = {
  id: 'id',
  height: 'height',
  weight: 'weight',
  bloodPressure: 'bloodPressure',
  heartRate: 'heartRate',
  respiratoryRate: 'respiratoryRate',
  temperature: 'temperature',
  spo2: 'spo2',
  painScore: 'painScore',
  recordedBy: 'recordedBy',
  createdDate: 'createdDate',
  updatedDate: 'updatedDate',
  patientId: 'patientId',
  medicalRecordId: 'medicalRecordId',
  clinicalDetailsId: 'clinicalDetailsId'
};

exports.Prisma.ClinicalDetailsScalarFieldEnum = {
  id: 'id',
  date: 'date',
  chiefComplaint: 'chiefComplaint',
  hpi: 'hpi',
  allergies: 'allergies',
  notes: 'notes',
  assessment: 'assessment',
  plan: 'plan',
  recordedBy: 'recordedBy',
  patientId: 'patientId'
};

exports.Prisma.ReferralRecordScalarFieldEnum = {
  id: 'id',
  date: 'date',
  referralType: 'referralType',
  referredTo: 'referredTo',
  department: 'department',
  reason: 'reason',
  notes: 'notes',
  status: 'status',
  patientId: 'patientId',
  doctorId: 'doctorId'
};

exports.Prisma.MedicationInventoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  form: 'form',
  strength: 'strength',
  batchNumber: 'batchNumber',
  quantity: 'quantity',
  reorderLevel: 'reorderLevel',
  status: 'status',
  supplier: 'supplier',
  orderDate: 'orderDate',
  arrivalDate: 'arrivalDate',
  expiryDate: 'expiryDate',
  reservedFor: 'reservedFor',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PrescriptionScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  patientMedicationId: 'patientMedicationId',
  medicationInventoryId: 'medicationInventoryId',
  medicalRecordId: 'medicalRecordId',
  clinicalDetailsId: 'clinicalDetailsId'
};

exports.Prisma.PatientMedicationScalarFieldEnum = {
  id: 'id',
  patientId: 'patientId',
  prescribedById: 'prescribedById',
  prescribedByName: 'prescribedByName',
  name: 'name',
  dosage: 'dosage',
  frequency: 'frequency',
  route: 'route',
  startDate: 'startDate',
  endDate: 'endDate',
  status: 'status',
  instructions: 'instructions',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  clinicalDetailsId: 'clinicalDetailsId'
};

exports.Prisma.LabTestScalarFieldEnum = {
  id: 'id',
  testType: 'testType',
  testCode: 'testCode',
  department: 'department',
  priority: 'priority',
  doctorId: 'doctorId',
  patientId: 'patientId',
  medicalRecordId: 'medicalRecordId',
  clinicalDetailsId: 'clinicalDetailsId',
  specimenType: 'specimenType',
  specimenId: 'specimenId',
  specimenCollectedAt: 'specimenCollectedAt',
  status: 'status',
  requestedAt: 'requestedAt',
  acceptedAt: 'acceptedAt',
  cancelledAt: 'cancelledAt',
  cancelledBy: 'cancelledBy',
  reasonForCancellation: 'reasonForCancellation',
  results: 'results',
  validatedAt: 'validatedAt',
  validatedBy: 'validatedBy',
  releasedAt: 'releasedAt',
  billingCode: 'billingCode',
  cost: 'cost',
  coveredByInsurance: 'coveredByInsurance',
  orderNotes: 'orderNotes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Role = exports.$Enums.Role = {
  ADMIN: 'ADMIN',
  DOCTOR: 'DOCTOR',
  NURSE: 'NURSE',
  PATIENT: 'PATIENT'
};

exports.DiagnoseType = exports.$Enums.DiagnoseType = {
  MEDICAL: 'MEDICAL',
  ALLERGY: 'ALLERGY',
  SURGICAL: 'SURGICAL',
  FAMILY: 'FAMILY',
  SOCIAL: 'SOCIAL'
};

exports.DiagnoseStatus = exports.$Enums.DiagnoseStatus = {
  ACTIVE: 'ACTIVE',
  RESOLVED: 'RESOLVED',
  CHRONIC: 'CHRONIC'
};

exports.Lifestyle = exports.$Enums.Lifestyle = {
  SEDENTARY: 'SEDENTARY',
  LIGHTLY_ACTIVE: 'LIGHTLY_ACTIVE',
  MODERATELY_ACTIVE: 'MODERATELY_ACTIVE',
  VERY_ACTIVE: 'VERY_ACTIVE',
  EXTRA_ACTIVE: 'EXTRA_ACTIVE'
};

exports.SmokingStatus = exports.$Enums.SmokingStatus = {
  NEVER: 'NEVER',
  CURRENT_DAILY: 'CURRENT_DAILY',
  CURRENT_OCCASIONAL: 'CURRENT_OCCASIONAL',
  FORMER: 'FORMER',
  UNKNOWN: 'UNKNOWN'
};

exports.AlcoholUse = exports.$Enums.AlcoholUse = {
  NEVER: 'NEVER',
  OCCASIONAL: 'OCCASIONAL',
  MODERATE: 'MODERATE',
  DAILY: 'DAILY',
  HEAVY: 'HEAVY',
  FORMER: 'FORMER',
  UNKNOWN: 'UNKNOWN'
};

exports.DrugUse = exports.$Enums.DrugUse = {
  NEVER: 'NEVER',
  OCCASIONAL: 'OCCASIONAL',
  REGULAR: 'REGULAR',
  FORMER: 'FORMER',
  UNKNOWN: 'UNKNOWN'
};

exports.Diet = exports.$Enums.Diet = {
  OMNIVORE: 'OMNIVORE',
  VEGETARIAN: 'VEGETARIAN',
  VEGAN: 'VEGAN',
  PESCATARIAN: 'PESCATARIAN',
  KETO: 'KETO',
  HIGH_PROTEIN: 'HIGH_PROTEIN',
  OTHER: 'OTHER'
};

exports.MedicationStatus = exports.$Enums.MedicationStatus = {
  IN_STOCK: 'IN_STOCK',
  LOW_STOCK: 'LOW_STOCK',
  OUT_OF_STOCK: 'OUT_OF_STOCK',
  ON_ORDER: 'ON_ORDER',
  ARRIVED: 'ARRIVED',
  EXPIRED: 'EXPIRED',
  RESERVED: 'RESERVED'
};

exports.Priority = exports.$Enums.Priority = {
  ROUTINE: 'ROUTINE',
  URGENT: 'URGENT',
  STAT: 'STAT'
};

exports.LabStatus = exports.$Enums.LabStatus = {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  IN_PROGRESS: 'IN_PROGRESS',
  RESULT_ENTERED: 'RESULT_ENTERED',
  VALIDATED: 'VALIDATED',
  RELEASED: 'RELEASED'
};

exports.Prisma.ModelName = {
  User: 'User',
  Session: 'Session',
  Patient: 'Patient',
  Doctor: 'Doctor',
  Nurse: 'Nurse',
  Admin: 'Admin',
  Diagnosis: 'Diagnosis',
  History: 'History',
  MedicalRecord: 'MedicalRecord',
  VitalsRecord: 'VitalsRecord',
  ClinicalDetails: 'ClinicalDetails',
  ReferralRecord: 'ReferralRecord',
  MedicationInventory: 'MedicationInventory',
  Prescription: 'Prescription',
  PatientMedication: 'PatientMedication',
  LabTest: 'LabTest'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
