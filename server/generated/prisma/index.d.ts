
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Doctor
 * 
 */
export type Doctor = $Result.DefaultSelection<Prisma.$DoctorPayload>
/**
 * Model Nurse
 * 
 */
export type Nurse = $Result.DefaultSelection<Prisma.$NursePayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model MedicalRecord
 * 
 */
export type MedicalRecord = $Result.DefaultSelection<Prisma.$MedicalRecordPayload>
/**
 * Model MedicationInventory
 * 
 */
export type MedicationInventory = $Result.DefaultSelection<Prisma.$MedicationInventoryPayload>
/**
 * Model Prescription
 * 
 */
export type Prescription = $Result.DefaultSelection<Prisma.$PrescriptionPayload>
/**
 * Model PatientMedication
 * 
 */
export type PatientMedication = $Result.DefaultSelection<Prisma.$PatientMedicationPayload>
/**
 * Model LabTest
 * 
 */
export type LabTest = $Result.DefaultSelection<Prisma.$LabTestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LabStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  IN_PROGRESS: 'IN_PROGRESS',
  RESULT_ENTERED: 'RESULT_ENTERED',
  VALIDATED: 'VALIDATED',
  RELEASED: 'RELEASED'
};

export type LabStatus = (typeof LabStatus)[keyof typeof LabStatus]


export const MedicationStatus: {
  IN_STOCK: 'IN_STOCK',
  LOW_STOCK: 'LOW_STOCK',
  OUT_OF_STOCK: 'OUT_OF_STOCK',
  ON_ORDER: 'ON_ORDER',
  ARRIVED: 'ARRIVED',
  EXPIRED: 'EXPIRED',
  RESERVED: 'RESERVED'
};

export type MedicationStatus = (typeof MedicationStatus)[keyof typeof MedicationStatus]


export const PrescriptionStatus: {
  NEW: 'NEW',
  ACTIVE: 'ACTIVE',
  DISCONTINUED: 'DISCONTINUED'
};

export type PrescriptionStatus = (typeof PrescriptionStatus)[keyof typeof PrescriptionStatus]


export const Role: {
  ADMIN: 'ADMIN',
  DOCTOR: 'DOCTOR',
  NURSE: 'NURSE',
  PATIENT: 'PATIENT'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type LabStatus = $Enums.LabStatus

export const LabStatus: typeof $Enums.LabStatus

export type MedicationStatus = $Enums.MedicationStatus

export const MedicationStatus: typeof $Enums.MedicationStatus

export type PrescriptionStatus = $Enums.PrescriptionStatus

export const PrescriptionStatus: typeof $Enums.PrescriptionStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nurse`: Exposes CRUD operations for the **Nurse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nurses
    * const nurses = await prisma.nurse.findMany()
    * ```
    */
  get nurse(): Prisma.NurseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicalRecord`: Exposes CRUD operations for the **MedicalRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalRecords
    * const medicalRecords = await prisma.medicalRecord.findMany()
    * ```
    */
  get medicalRecord(): Prisma.MedicalRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicationInventory`: Exposes CRUD operations for the **MedicationInventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicationInventories
    * const medicationInventories = await prisma.medicationInventory.findMany()
    * ```
    */
  get medicationInventory(): Prisma.MedicationInventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prescription`: Exposes CRUD operations for the **Prescription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prescriptions
    * const prescriptions = await prisma.prescription.findMany()
    * ```
    */
  get prescription(): Prisma.PrescriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patientMedication`: Exposes CRUD operations for the **PatientMedication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatientMedications
    * const patientMedications = await prisma.patientMedication.findMany()
    * ```
    */
  get patientMedication(): Prisma.PatientMedicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.labTest`: Exposes CRUD operations for the **LabTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LabTests
    * const labTests = await prisma.labTest.findMany()
    * ```
    */
  get labTest(): Prisma.LabTestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Patient: 'Patient',
    Doctor: 'Doctor',
    Nurse: 'Nurse',
    Admin: 'Admin',
    MedicalRecord: 'MedicalRecord',
    MedicationInventory: 'MedicationInventory',
    Prescription: 'Prescription',
    PatientMedication: 'PatientMedication',
    LabTest: 'LabTest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "patient" | "doctor" | "nurse" | "admin" | "medicalRecord" | "medicationInventory" | "prescription" | "patientMedication" | "labTest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Doctor: {
        payload: Prisma.$DoctorPayload<ExtArgs>
        fields: Prisma.DoctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findFirst: {
            args: Prisma.DoctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findMany: {
            args: Prisma.DoctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          create: {
            args: Prisma.DoctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          createMany: {
            args: Prisma.DoctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          delete: {
            args: Prisma.DoctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          update: {
            args: Prisma.DoctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          upsert: {
            args: Prisma.DoctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.DoctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      Nurse: {
        payload: Prisma.$NursePayload<ExtArgs>
        fields: Prisma.NurseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NurseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NurseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>
          }
          findFirst: {
            args: Prisma.NurseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NurseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>
          }
          findMany: {
            args: Prisma.NurseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>[]
          }
          create: {
            args: Prisma.NurseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>
          }
          createMany: {
            args: Prisma.NurseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NurseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>[]
          }
          delete: {
            args: Prisma.NurseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>
          }
          update: {
            args: Prisma.NurseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>
          }
          deleteMany: {
            args: Prisma.NurseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NurseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NurseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>[]
          }
          upsert: {
            args: Prisma.NurseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>
          }
          aggregate: {
            args: Prisma.NurseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNurse>
          }
          groupBy: {
            args: Prisma.NurseGroupByArgs<ExtArgs>
            result: $Utils.Optional<NurseGroupByOutputType>[]
          }
          count: {
            args: Prisma.NurseCountArgs<ExtArgs>
            result: $Utils.Optional<NurseCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      MedicalRecord: {
        payload: Prisma.$MedicalRecordPayload<ExtArgs>
        fields: Prisma.MedicalRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          findFirst: {
            args: Prisma.MedicalRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          findMany: {
            args: Prisma.MedicalRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>[]
          }
          create: {
            args: Prisma.MedicalRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          createMany: {
            args: Prisma.MedicalRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicalRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>[]
          }
          delete: {
            args: Prisma.MedicalRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          update: {
            args: Prisma.MedicalRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          deleteMany: {
            args: Prisma.MedicalRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicalRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>[]
          }
          upsert: {
            args: Prisma.MedicalRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          aggregate: {
            args: Prisma.MedicalRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicalRecord>
          }
          groupBy: {
            args: Prisma.MedicalRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalRecordCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalRecordCountAggregateOutputType> | number
          }
        }
      }
      MedicationInventory: {
        payload: Prisma.$MedicationInventoryPayload<ExtArgs>
        fields: Prisma.MedicationInventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicationInventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationInventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicationInventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationInventoryPayload>
          }
          findFirst: {
            args: Prisma.MedicationInventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationInventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicationInventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationInventoryPayload>
          }
          findMany: {
            args: Prisma.MedicationInventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationInventoryPayload>[]
          }
          create: {
            args: Prisma.MedicationInventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationInventoryPayload>
          }
          createMany: {
            args: Prisma.MedicationInventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicationInventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationInventoryPayload>[]
          }
          delete: {
            args: Prisma.MedicationInventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationInventoryPayload>
          }
          update: {
            args: Prisma.MedicationInventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationInventoryPayload>
          }
          deleteMany: {
            args: Prisma.MedicationInventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicationInventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicationInventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationInventoryPayload>[]
          }
          upsert: {
            args: Prisma.MedicationInventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationInventoryPayload>
          }
          aggregate: {
            args: Prisma.MedicationInventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicationInventory>
          }
          groupBy: {
            args: Prisma.MedicationInventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicationInventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicationInventoryCountArgs<ExtArgs>
            result: $Utils.Optional<MedicationInventoryCountAggregateOutputType> | number
          }
        }
      }
      Prescription: {
        payload: Prisma.$PrescriptionPayload<ExtArgs>
        fields: Prisma.PrescriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrescriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrescriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          findFirst: {
            args: Prisma.PrescriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrescriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          findMany: {
            args: Prisma.PrescriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          create: {
            args: Prisma.PrescriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          createMany: {
            args: Prisma.PrescriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrescriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          delete: {
            args: Prisma.PrescriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          update: {
            args: Prisma.PrescriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          deleteMany: {
            args: Prisma.PrescriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrescriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrescriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          upsert: {
            args: Prisma.PrescriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          aggregate: {
            args: Prisma.PrescriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrescription>
          }
          groupBy: {
            args: Prisma.PrescriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrescriptionCountArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionCountAggregateOutputType> | number
          }
        }
      }
      PatientMedication: {
        payload: Prisma.$PatientMedicationPayload<ExtArgs>
        fields: Prisma.PatientMedicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientMedicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientMedicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientMedicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientMedicationPayload>
          }
          findFirst: {
            args: Prisma.PatientMedicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientMedicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientMedicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientMedicationPayload>
          }
          findMany: {
            args: Prisma.PatientMedicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientMedicationPayload>[]
          }
          create: {
            args: Prisma.PatientMedicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientMedicationPayload>
          }
          createMany: {
            args: Prisma.PatientMedicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientMedicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientMedicationPayload>[]
          }
          delete: {
            args: Prisma.PatientMedicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientMedicationPayload>
          }
          update: {
            args: Prisma.PatientMedicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientMedicationPayload>
          }
          deleteMany: {
            args: Prisma.PatientMedicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientMedicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientMedicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientMedicationPayload>[]
          }
          upsert: {
            args: Prisma.PatientMedicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientMedicationPayload>
          }
          aggregate: {
            args: Prisma.PatientMedicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatientMedication>
          }
          groupBy: {
            args: Prisma.PatientMedicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientMedicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientMedicationCountArgs<ExtArgs>
            result: $Utils.Optional<PatientMedicationCountAggregateOutputType> | number
          }
        }
      }
      LabTest: {
        payload: Prisma.$LabTestPayload<ExtArgs>
        fields: Prisma.LabTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LabTestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LabTestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>
          }
          findFirst: {
            args: Prisma.LabTestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LabTestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>
          }
          findMany: {
            args: Prisma.LabTestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>[]
          }
          create: {
            args: Prisma.LabTestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>
          }
          createMany: {
            args: Prisma.LabTestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LabTestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>[]
          }
          delete: {
            args: Prisma.LabTestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>
          }
          update: {
            args: Prisma.LabTestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>
          }
          deleteMany: {
            args: Prisma.LabTestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LabTestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LabTestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>[]
          }
          upsert: {
            args: Prisma.LabTestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabTestPayload>
          }
          aggregate: {
            args: Prisma.LabTestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLabTest>
          }
          groupBy: {
            args: Prisma.LabTestGroupByArgs<ExtArgs>
            result: $Utils.Optional<LabTestGroupByOutputType>[]
          }
          count: {
            args: Prisma.LabTestCountArgs<ExtArgs>
            result: $Utils.Optional<LabTestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    patient?: PatientOmit
    doctor?: DoctorOmit
    nurse?: NurseOmit
    admin?: AdminOmit
    medicalRecord?: MedicalRecordOmit
    medicationInventory?: MedicationInventoryOmit
    prescription?: PrescriptionOmit
    patientMedication?: PatientMedicationOmit
    labTest?: LabTestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    patients: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | UserCountOutputTypeCountPatientsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    records: number
    patientMedication: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    records?: boolean | PatientCountOutputTypeCountRecordsArgs
    patientMedication?: boolean | PatientCountOutputTypeCountPatientMedicationArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalRecordWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountPatientMedicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientMedicationWhereInput
  }


  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    patientMedication: number
    medicalRecords: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patientMedication?: boolean | DoctorCountOutputTypeCountPatientMedicationArgs
    medicalRecords?: boolean | DoctorCountOutputTypeCountMedicalRecordsArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountPatientMedicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientMedicationWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountMedicalRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalRecordWhereInput
  }


  /**
   * Count Type MedicalRecordCountOutputType
   */

  export type MedicalRecordCountOutputType = {
    prescriptions: number
    labTests: number
  }

  export type MedicalRecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescriptions?: boolean | MedicalRecordCountOutputTypeCountPrescriptionsArgs
    labTests?: boolean | MedicalRecordCountOutputTypeCountLabTestsArgs
  }

  // Custom InputTypes
  /**
   * MedicalRecordCountOutputType without action
   */
  export type MedicalRecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecordCountOutputType
     */
    select?: MedicalRecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicalRecordCountOutputType without action
   */
  export type MedicalRecordCountOutputTypeCountPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }

  /**
   * MedicalRecordCountOutputType without action
   */
  export type MedicalRecordCountOutputTypeCountLabTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabTestWhereInput
  }


  /**
   * Count Type MedicationInventoryCountOutputType
   */

  export type MedicationInventoryCountOutputType = {
    prescriptions: number
  }

  export type MedicationInventoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescriptions?: boolean | MedicationInventoryCountOutputTypeCountPrescriptionsArgs
  }

  // Custom InputTypes
  /**
   * MedicationInventoryCountOutputType without action
   */
  export type MedicationInventoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationInventoryCountOutputType
     */
    select?: MedicationInventoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicationInventoryCountOutputType without action
   */
  export type MedicationInventoryCountOutputTypeCountPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }


  /**
   * Count Type PatientMedicationCountOutputType
   */

  export type PatientMedicationCountOutputType = {
    prescriptions: number
  }

  export type PatientMedicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescriptions?: boolean | PatientMedicationCountOutputTypeCountPrescriptionsArgs
  }

  // Custom InputTypes
  /**
   * PatientMedicationCountOutputType without action
   */
  export type PatientMedicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedicationCountOutputType
     */
    select?: PatientMedicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientMedicationCountOutputType without action
   */
  export type PatientMedicationCountOutputTypeCountPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    patients?: boolean | User$patientsArgs<ExtArgs>
    patientProfile?: boolean | User$patientProfileArgs<ExtArgs>
    doctor?: boolean | User$doctorArgs<ExtArgs>
    nurse?: boolean | User$nurseArgs<ExtArgs>
    admin?: boolean | User$adminArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | User$patientsArgs<ExtArgs>
    patientProfile?: boolean | User$patientProfileArgs<ExtArgs>
    doctor?: boolean | User$doctorArgs<ExtArgs>
    nurse?: boolean | User$nurseArgs<ExtArgs>
    admin?: boolean | User$adminArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      patients: Prisma.$PatientPayload<ExtArgs>[]
      patientProfile: Prisma.$PatientPayload<ExtArgs> | null
      doctor: Prisma.$DoctorPayload<ExtArgs> | null
      nurse: Prisma.$NursePayload<ExtArgs> | null
      admin: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patients<T extends User$patientsArgs<ExtArgs> = {}>(args?: Subset<T, User$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patientProfile<T extends User$patientProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$patientProfileArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    doctor<T extends User$doctorArgs<ExtArgs> = {}>(args?: Subset<T, User$doctorArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    nurse<T extends User$nurseArgs<ExtArgs> = {}>(args?: Subset<T, User$nurseArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    admin<T extends User$adminArgs<ExtArgs> = {}>(args?: Subset<T, User$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.patients
   */
  export type User$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * User.patientProfile
   */
  export type User$patientProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
  }

  /**
   * User.doctor
   */
  export type User$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    where?: DoctorWhereInput
  }

  /**
   * User.nurse
   */
  export type User$nurseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    where?: NurseWhereInput
  }

  /**
   * User.admin
   */
  export type User$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    userId: string | null
    fullName: string | null
    dateOfBirth: Date | null
    gender: string | null
    phone: string | null
    address: string | null
    emergencyContact: string | null
    insuranceDetails: string | null
    doctorId: string | null
  }

  export type PatientMaxAggregateOutputType = {
    userId: string | null
    fullName: string | null
    dateOfBirth: Date | null
    gender: string | null
    phone: string | null
    address: string | null
    emergencyContact: string | null
    insuranceDetails: string | null
    doctorId: string | null
  }

  export type PatientCountAggregateOutputType = {
    userId: number
    fullName: number
    dateOfBirth: number
    gender: number
    phone: number
    address: number
    emergencyContact: number
    insuranceDetails: number
    doctorId: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    userId?: true
    fullName?: true
    dateOfBirth?: true
    gender?: true
    phone?: true
    address?: true
    emergencyContact?: true
    insuranceDetails?: true
    doctorId?: true
  }

  export type PatientMaxAggregateInputType = {
    userId?: true
    fullName?: true
    dateOfBirth?: true
    gender?: true
    phone?: true
    address?: true
    emergencyContact?: true
    insuranceDetails?: true
    doctorId?: true
  }

  export type PatientCountAggregateInputType = {
    userId?: true
    fullName?: true
    dateOfBirth?: true
    gender?: true
    phone?: true
    address?: true
    emergencyContact?: true
    insuranceDetails?: true
    doctorId?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    userId: string
    fullName: string
    dateOfBirth: Date
    gender: string
    phone: string
    address: string
    emergencyContact: string
    insuranceDetails: string | null
    doctorId: string
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    fullName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    phone?: boolean
    address?: boolean
    emergencyContact?: boolean
    insuranceDetails?: boolean
    doctorId?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    records?: boolean | Patient$recordsArgs<ExtArgs>
    patientMedication?: boolean | Patient$patientMedicationArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    fullName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    phone?: boolean
    address?: boolean
    emergencyContact?: boolean
    insuranceDetails?: boolean
    doctorId?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    fullName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    phone?: boolean
    address?: boolean
    emergencyContact?: boolean
    insuranceDetails?: boolean
    doctorId?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    userId?: boolean
    fullName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    phone?: boolean
    address?: boolean
    emergencyContact?: boolean
    insuranceDetails?: boolean
    doctorId?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "fullName" | "dateOfBirth" | "gender" | "phone" | "address" | "emergencyContact" | "insuranceDetails" | "doctorId", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    records?: boolean | Patient$recordsArgs<ExtArgs>
    patientMedication?: boolean | Patient$patientMedicationArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      doctor: Prisma.$UserPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      records: Prisma.$MedicalRecordPayload<ExtArgs>[]
      patientMedication: Prisma.$PatientMedicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      fullName: string
      dateOfBirth: Date
      gender: string
      phone: string
      address: string
      emergencyContact: string
      insuranceDetails: string | null
      doctorId: string
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const patientWithUserIdOnly = await prisma.patient.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `userId`
     * const patientWithUserIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `userId`
     * const patientWithUserIdOnly = await prisma.patient.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    records<T extends Patient$recordsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patientMedication<T extends Patient$patientMedicationArgs<ExtArgs> = {}>(args?: Subset<T, Patient$patientMedicationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly userId: FieldRef<"Patient", 'String'>
    readonly fullName: FieldRef<"Patient", 'String'>
    readonly dateOfBirth: FieldRef<"Patient", 'DateTime'>
    readonly gender: FieldRef<"Patient", 'String'>
    readonly phone: FieldRef<"Patient", 'String'>
    readonly address: FieldRef<"Patient", 'String'>
    readonly emergencyContact: FieldRef<"Patient", 'String'>
    readonly insuranceDetails: FieldRef<"Patient", 'String'>
    readonly doctorId: FieldRef<"Patient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.records
   */
  export type Patient$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    where?: MedicalRecordWhereInput
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    cursor?: MedicalRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * Patient.patientMedication
   */
  export type Patient$patientMedicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedication
     */
    select?: PatientMedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedication
     */
    omit?: PatientMedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationInclude<ExtArgs> | null
    where?: PatientMedicationWhereInput
    orderBy?: PatientMedicationOrderByWithRelationInput | PatientMedicationOrderByWithRelationInput[]
    cursor?: PatientMedicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientMedicationScalarFieldEnum | PatientMedicationScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorMinAggregateOutputType = {
    userId: string | null
    specialization: string | null
  }

  export type DoctorMaxAggregateOutputType = {
    userId: string | null
    specialization: string | null
  }

  export type DoctorCountAggregateOutputType = {
    userId: number
    specialization: number
    _all: number
  }


  export type DoctorMinAggregateInputType = {
    userId?: true
    specialization?: true
  }

  export type DoctorMaxAggregateInputType = {
    userId?: true
    specialization?: true
  }

  export type DoctorCountAggregateInputType = {
    userId?: true
    specialization?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithAggregationInput | DoctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    userId: string
    specialization: string
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    specialization?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    patientMedication?: boolean | Doctor$patientMedicationArgs<ExtArgs>
    medicalRecords?: boolean | Doctor$medicalRecordsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    specialization?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    specialization?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectScalar = {
    userId?: boolean
    specialization?: boolean
  }

  export type DoctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "specialization", ExtArgs["result"]["doctor"]>
  export type DoctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    patientMedication?: boolean | Doctor$patientMedicationArgs<ExtArgs>
    medicalRecords?: boolean | Doctor$medicalRecordsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      patientMedication: Prisma.$PatientMedicationPayload<ExtArgs>[]
      medicalRecords: Prisma.$MedicalRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      specialization: string
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = $Result.GetResult<Prisma.$DoctorPayload, S>

  type DoctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctor'], meta: { name: 'Doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorFindUniqueArgs>(args: SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorFindFirstArgs>(args?: SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const doctorWithUserIdOnly = await prisma.doctor.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends DoctorFindManyArgs>(args?: SelectSubset<T, DoctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends DoctorCreateArgs>(args: SelectSubset<T, DoctorCreateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorCreateManyArgs>(args?: SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {DoctorCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `userId`
     * const doctorWithUserIdOnly = await prisma.doctor.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends DoctorDeleteArgs>(args: SelectSubset<T, DoctorDeleteArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorUpdateArgs>(args: SelectSubset<T, DoctorUpdateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorDeleteManyArgs>(args?: SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorUpdateManyArgs>(args: SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors and returns the data updated in the database.
     * @param {DoctorUpdateManyAndReturnArgs} args - Arguments to update many Doctors.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doctors and only return the `userId`
     * const doctorWithUserIdOnly = await prisma.doctor.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoctorUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends DoctorUpsertArgs>(args: SelectSubset<T, DoctorUpsertArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctor model
   */
  readonly fields: DoctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patientMedication<T extends Doctor$patientMedicationArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$patientMedicationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medicalRecords<T extends Doctor$medicalRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$medicalRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Doctor model
   */
  interface DoctorFieldRefs {
    readonly userId: FieldRef<"Doctor", 'String'>
    readonly specialization: FieldRef<"Doctor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Doctor findUnique
   */
  export type DoctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findFirst
   */
  export type DoctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor create
   */
  export type DoctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }

  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor createManyAndReturn
   */
  export type DoctorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctor update
   */
  export type DoctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor updateManyAndReturn
   */
  export type DoctorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }

  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to delete.
     */
    limit?: number
  }

  /**
   * Doctor.patientMedication
   */
  export type Doctor$patientMedicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedication
     */
    select?: PatientMedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedication
     */
    omit?: PatientMedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationInclude<ExtArgs> | null
    where?: PatientMedicationWhereInput
    orderBy?: PatientMedicationOrderByWithRelationInput | PatientMedicationOrderByWithRelationInput[]
    cursor?: PatientMedicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientMedicationScalarFieldEnum | PatientMedicationScalarFieldEnum[]
  }

  /**
   * Doctor.medicalRecords
   */
  export type Doctor$medicalRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    where?: MedicalRecordWhereInput
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    cursor?: MedicalRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * Doctor without action
   */
  export type DoctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
  }


  /**
   * Model Nurse
   */

  export type AggregateNurse = {
    _count: NurseCountAggregateOutputType | null
    _min: NurseMinAggregateOutputType | null
    _max: NurseMaxAggregateOutputType | null
  }

  export type NurseMinAggregateOutputType = {
    userId: string | null
    shift: string | null
    department: string | null
  }

  export type NurseMaxAggregateOutputType = {
    userId: string | null
    shift: string | null
    department: string | null
  }

  export type NurseCountAggregateOutputType = {
    userId: number
    shift: number
    department: number
    _all: number
  }


  export type NurseMinAggregateInputType = {
    userId?: true
    shift?: true
    department?: true
  }

  export type NurseMaxAggregateInputType = {
    userId?: true
    shift?: true
    department?: true
  }

  export type NurseCountAggregateInputType = {
    userId?: true
    shift?: true
    department?: true
    _all?: true
  }

  export type NurseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nurse to aggregate.
     */
    where?: NurseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nurses to fetch.
     */
    orderBy?: NurseOrderByWithRelationInput | NurseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NurseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nurses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nurses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nurses
    **/
    _count?: true | NurseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NurseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NurseMaxAggregateInputType
  }

  export type GetNurseAggregateType<T extends NurseAggregateArgs> = {
        [P in keyof T & keyof AggregateNurse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNurse[P]>
      : GetScalarType<T[P], AggregateNurse[P]>
  }




  export type NurseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NurseWhereInput
    orderBy?: NurseOrderByWithAggregationInput | NurseOrderByWithAggregationInput[]
    by: NurseScalarFieldEnum[] | NurseScalarFieldEnum
    having?: NurseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NurseCountAggregateInputType | true
    _min?: NurseMinAggregateInputType
    _max?: NurseMaxAggregateInputType
  }

  export type NurseGroupByOutputType = {
    userId: string
    shift: string
    department: string
    _count: NurseCountAggregateOutputType | null
    _min: NurseMinAggregateOutputType | null
    _max: NurseMaxAggregateOutputType | null
  }

  type GetNurseGroupByPayload<T extends NurseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NurseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NurseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NurseGroupByOutputType[P]>
            : GetScalarType<T[P], NurseGroupByOutputType[P]>
        }
      >
    >


  export type NurseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    shift?: boolean
    department?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nurse"]>

  export type NurseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    shift?: boolean
    department?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nurse"]>

  export type NurseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    shift?: boolean
    department?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nurse"]>

  export type NurseSelectScalar = {
    userId?: boolean
    shift?: boolean
    department?: boolean
  }

  export type NurseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "shift" | "department", ExtArgs["result"]["nurse"]>
  export type NurseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NurseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NurseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Nurse"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      shift: string
      department: string
    }, ExtArgs["result"]["nurse"]>
    composites: {}
  }

  type NurseGetPayload<S extends boolean | null | undefined | NurseDefaultArgs> = $Result.GetResult<Prisma.$NursePayload, S>

  type NurseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NurseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NurseCountAggregateInputType | true
    }

  export interface NurseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Nurse'], meta: { name: 'Nurse' } }
    /**
     * Find zero or one Nurse that matches the filter.
     * @param {NurseFindUniqueArgs} args - Arguments to find a Nurse
     * @example
     * // Get one Nurse
     * const nurse = await prisma.nurse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NurseFindUniqueArgs>(args: SelectSubset<T, NurseFindUniqueArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nurse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NurseFindUniqueOrThrowArgs} args - Arguments to find a Nurse
     * @example
     * // Get one Nurse
     * const nurse = await prisma.nurse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NurseFindUniqueOrThrowArgs>(args: SelectSubset<T, NurseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nurse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseFindFirstArgs} args - Arguments to find a Nurse
     * @example
     * // Get one Nurse
     * const nurse = await prisma.nurse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NurseFindFirstArgs>(args?: SelectSubset<T, NurseFindFirstArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nurse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseFindFirstOrThrowArgs} args - Arguments to find a Nurse
     * @example
     * // Get one Nurse
     * const nurse = await prisma.nurse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NurseFindFirstOrThrowArgs>(args?: SelectSubset<T, NurseFindFirstOrThrowArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nurses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nurses
     * const nurses = await prisma.nurse.findMany()
     * 
     * // Get first 10 Nurses
     * const nurses = await prisma.nurse.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const nurseWithUserIdOnly = await prisma.nurse.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends NurseFindManyArgs>(args?: SelectSubset<T, NurseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nurse.
     * @param {NurseCreateArgs} args - Arguments to create a Nurse.
     * @example
     * // Create one Nurse
     * const Nurse = await prisma.nurse.create({
     *   data: {
     *     // ... data to create a Nurse
     *   }
     * })
     * 
     */
    create<T extends NurseCreateArgs>(args: SelectSubset<T, NurseCreateArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nurses.
     * @param {NurseCreateManyArgs} args - Arguments to create many Nurses.
     * @example
     * // Create many Nurses
     * const nurse = await prisma.nurse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NurseCreateManyArgs>(args?: SelectSubset<T, NurseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nurses and returns the data saved in the database.
     * @param {NurseCreateManyAndReturnArgs} args - Arguments to create many Nurses.
     * @example
     * // Create many Nurses
     * const nurse = await prisma.nurse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nurses and only return the `userId`
     * const nurseWithUserIdOnly = await prisma.nurse.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NurseCreateManyAndReturnArgs>(args?: SelectSubset<T, NurseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nurse.
     * @param {NurseDeleteArgs} args - Arguments to delete one Nurse.
     * @example
     * // Delete one Nurse
     * const Nurse = await prisma.nurse.delete({
     *   where: {
     *     // ... filter to delete one Nurse
     *   }
     * })
     * 
     */
    delete<T extends NurseDeleteArgs>(args: SelectSubset<T, NurseDeleteArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nurse.
     * @param {NurseUpdateArgs} args - Arguments to update one Nurse.
     * @example
     * // Update one Nurse
     * const nurse = await prisma.nurse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NurseUpdateArgs>(args: SelectSubset<T, NurseUpdateArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nurses.
     * @param {NurseDeleteManyArgs} args - Arguments to filter Nurses to delete.
     * @example
     * // Delete a few Nurses
     * const { count } = await prisma.nurse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NurseDeleteManyArgs>(args?: SelectSubset<T, NurseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nurses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nurses
     * const nurse = await prisma.nurse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NurseUpdateManyArgs>(args: SelectSubset<T, NurseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nurses and returns the data updated in the database.
     * @param {NurseUpdateManyAndReturnArgs} args - Arguments to update many Nurses.
     * @example
     * // Update many Nurses
     * const nurse = await prisma.nurse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nurses and only return the `userId`
     * const nurseWithUserIdOnly = await prisma.nurse.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NurseUpdateManyAndReturnArgs>(args: SelectSubset<T, NurseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nurse.
     * @param {NurseUpsertArgs} args - Arguments to update or create a Nurse.
     * @example
     * // Update or create a Nurse
     * const nurse = await prisma.nurse.upsert({
     *   create: {
     *     // ... data to create a Nurse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nurse we want to update
     *   }
     * })
     */
    upsert<T extends NurseUpsertArgs>(args: SelectSubset<T, NurseUpsertArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nurses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseCountArgs} args - Arguments to filter Nurses to count.
     * @example
     * // Count the number of Nurses
     * const count = await prisma.nurse.count({
     *   where: {
     *     // ... the filter for the Nurses we want to count
     *   }
     * })
    **/
    count<T extends NurseCountArgs>(
      args?: Subset<T, NurseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NurseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nurse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NurseAggregateArgs>(args: Subset<T, NurseAggregateArgs>): Prisma.PrismaPromise<GetNurseAggregateType<T>>

    /**
     * Group by Nurse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NurseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NurseGroupByArgs['orderBy'] }
        : { orderBy?: NurseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NurseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNurseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Nurse model
   */
  readonly fields: NurseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nurse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NurseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Nurse model
   */
  interface NurseFieldRefs {
    readonly userId: FieldRef<"Nurse", 'String'>
    readonly shift: FieldRef<"Nurse", 'String'>
    readonly department: FieldRef<"Nurse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Nurse findUnique
   */
  export type NurseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * Filter, which Nurse to fetch.
     */
    where: NurseWhereUniqueInput
  }

  /**
   * Nurse findUniqueOrThrow
   */
  export type NurseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * Filter, which Nurse to fetch.
     */
    where: NurseWhereUniqueInput
  }

  /**
   * Nurse findFirst
   */
  export type NurseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * Filter, which Nurse to fetch.
     */
    where?: NurseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nurses to fetch.
     */
    orderBy?: NurseOrderByWithRelationInput | NurseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nurses.
     */
    cursor?: NurseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nurses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nurses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nurses.
     */
    distinct?: NurseScalarFieldEnum | NurseScalarFieldEnum[]
  }

  /**
   * Nurse findFirstOrThrow
   */
  export type NurseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * Filter, which Nurse to fetch.
     */
    where?: NurseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nurses to fetch.
     */
    orderBy?: NurseOrderByWithRelationInput | NurseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nurses.
     */
    cursor?: NurseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nurses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nurses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nurses.
     */
    distinct?: NurseScalarFieldEnum | NurseScalarFieldEnum[]
  }

  /**
   * Nurse findMany
   */
  export type NurseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * Filter, which Nurses to fetch.
     */
    where?: NurseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nurses to fetch.
     */
    orderBy?: NurseOrderByWithRelationInput | NurseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nurses.
     */
    cursor?: NurseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nurses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nurses.
     */
    skip?: number
    distinct?: NurseScalarFieldEnum | NurseScalarFieldEnum[]
  }

  /**
   * Nurse create
   */
  export type NurseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * The data needed to create a Nurse.
     */
    data: XOR<NurseCreateInput, NurseUncheckedCreateInput>
  }

  /**
   * Nurse createMany
   */
  export type NurseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nurses.
     */
    data: NurseCreateManyInput | NurseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nurse createManyAndReturn
   */
  export type NurseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * The data used to create many Nurses.
     */
    data: NurseCreateManyInput | NurseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Nurse update
   */
  export type NurseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * The data needed to update a Nurse.
     */
    data: XOR<NurseUpdateInput, NurseUncheckedUpdateInput>
    /**
     * Choose, which Nurse to update.
     */
    where: NurseWhereUniqueInput
  }

  /**
   * Nurse updateMany
   */
  export type NurseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nurses.
     */
    data: XOR<NurseUpdateManyMutationInput, NurseUncheckedUpdateManyInput>
    /**
     * Filter which Nurses to update
     */
    where?: NurseWhereInput
    /**
     * Limit how many Nurses to update.
     */
    limit?: number
  }

  /**
   * Nurse updateManyAndReturn
   */
  export type NurseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * The data used to update Nurses.
     */
    data: XOR<NurseUpdateManyMutationInput, NurseUncheckedUpdateManyInput>
    /**
     * Filter which Nurses to update
     */
    where?: NurseWhereInput
    /**
     * Limit how many Nurses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Nurse upsert
   */
  export type NurseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * The filter to search for the Nurse to update in case it exists.
     */
    where: NurseWhereUniqueInput
    /**
     * In case the Nurse found by the `where` argument doesn't exist, create a new Nurse with this data.
     */
    create: XOR<NurseCreateInput, NurseUncheckedCreateInput>
    /**
     * In case the Nurse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NurseUpdateInput, NurseUncheckedUpdateInput>
  }

  /**
   * Nurse delete
   */
  export type NurseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * Filter which Nurse to delete.
     */
    where: NurseWhereUniqueInput
  }

  /**
   * Nurse deleteMany
   */
  export type NurseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nurses to delete
     */
    where?: NurseWhereInput
    /**
     * Limit how many Nurses to delete.
     */
    limit?: number
  }

  /**
   * Nurse without action
   */
  export type NurseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    userId: string | null
    permissions: string | null
  }

  export type AdminMaxAggregateOutputType = {
    userId: string | null
    permissions: string | null
  }

  export type AdminCountAggregateOutputType = {
    userId: number
    permissions: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    userId?: true
    permissions?: true
  }

  export type AdminMaxAggregateInputType = {
    userId?: true
    permissions?: true
  }

  export type AdminCountAggregateInputType = {
    userId?: true
    permissions?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    userId: string
    permissions: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    permissions?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    permissions?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    permissions?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    userId?: boolean
    permissions?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "permissions", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      permissions: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const adminWithUserIdOnly = await prisma.admin.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `userId`
     * const adminWithUserIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `userId`
     * const adminWithUserIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly userId: FieldRef<"Admin", 'String'>
    readonly permissions: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model MedicalRecord
   */

  export type AggregateMedicalRecord = {
    _count: MedicalRecordCountAggregateOutputType | null
    _min: MedicalRecordMinAggregateOutputType | null
    _max: MedicalRecordMaxAggregateOutputType | null
  }

  export type MedicalRecordMinAggregateOutputType = {
    id: string | null
    diagnosis: string | null
    notes: string | null
    createdAt: Date | null
    patientId: string | null
    doctorId: string | null
  }

  export type MedicalRecordMaxAggregateOutputType = {
    id: string | null
    diagnosis: string | null
    notes: string | null
    createdAt: Date | null
    patientId: string | null
    doctorId: string | null
  }

  export type MedicalRecordCountAggregateOutputType = {
    id: number
    diagnosis: number
    notes: number
    createdAt: number
    patientId: number
    doctorId: number
    _all: number
  }


  export type MedicalRecordMinAggregateInputType = {
    id?: true
    diagnosis?: true
    notes?: true
    createdAt?: true
    patientId?: true
    doctorId?: true
  }

  export type MedicalRecordMaxAggregateInputType = {
    id?: true
    diagnosis?: true
    notes?: true
    createdAt?: true
    patientId?: true
    doctorId?: true
  }

  export type MedicalRecordCountAggregateInputType = {
    id?: true
    diagnosis?: true
    notes?: true
    createdAt?: true
    patientId?: true
    doctorId?: true
    _all?: true
  }

  export type MedicalRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalRecord to aggregate.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalRecords
    **/
    _count?: true | MedicalRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalRecordMaxAggregateInputType
  }

  export type GetMedicalRecordAggregateType<T extends MedicalRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalRecord[P]>
      : GetScalarType<T[P], AggregateMedicalRecord[P]>
  }




  export type MedicalRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalRecordWhereInput
    orderBy?: MedicalRecordOrderByWithAggregationInput | MedicalRecordOrderByWithAggregationInput[]
    by: MedicalRecordScalarFieldEnum[] | MedicalRecordScalarFieldEnum
    having?: MedicalRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalRecordCountAggregateInputType | true
    _min?: MedicalRecordMinAggregateInputType
    _max?: MedicalRecordMaxAggregateInputType
  }

  export type MedicalRecordGroupByOutputType = {
    id: string
    diagnosis: string
    notes: string | null
    createdAt: Date
    patientId: string
    doctorId: string
    _count: MedicalRecordCountAggregateOutputType | null
    _min: MedicalRecordMinAggregateOutputType | null
    _max: MedicalRecordMaxAggregateOutputType | null
  }

  type GetMedicalRecordGroupByPayload<T extends MedicalRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalRecordGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalRecordGroupByOutputType[P]>
        }
      >
    >


  export type MedicalRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diagnosis?: boolean
    notes?: boolean
    createdAt?: boolean
    patientId?: boolean
    doctorId?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    prescriptions?: boolean | MedicalRecord$prescriptionsArgs<ExtArgs>
    labTests?: boolean | MedicalRecord$labTestsArgs<ExtArgs>
    _count?: boolean | MedicalRecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalRecord"]>

  export type MedicalRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diagnosis?: boolean
    notes?: boolean
    createdAt?: boolean
    patientId?: boolean
    doctorId?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalRecord"]>

  export type MedicalRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diagnosis?: boolean
    notes?: boolean
    createdAt?: boolean
    patientId?: boolean
    doctorId?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalRecord"]>

  export type MedicalRecordSelectScalar = {
    id?: boolean
    diagnosis?: boolean
    notes?: boolean
    createdAt?: boolean
    patientId?: boolean
    doctorId?: boolean
  }

  export type MedicalRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "diagnosis" | "notes" | "createdAt" | "patientId" | "doctorId", ExtArgs["result"]["medicalRecord"]>
  export type MedicalRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    prescriptions?: boolean | MedicalRecord$prescriptionsArgs<ExtArgs>
    labTests?: boolean | MedicalRecord$labTestsArgs<ExtArgs>
    _count?: boolean | MedicalRecordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicalRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type MedicalRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }

  export type $MedicalRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalRecord"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      doctor: Prisma.$DoctorPayload<ExtArgs>
      prescriptions: Prisma.$PrescriptionPayload<ExtArgs>[]
      labTests: Prisma.$LabTestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      diagnosis: string
      notes: string | null
      createdAt: Date
      patientId: string
      doctorId: string
    }, ExtArgs["result"]["medicalRecord"]>
    composites: {}
  }

  type MedicalRecordGetPayload<S extends boolean | null | undefined | MedicalRecordDefaultArgs> = $Result.GetResult<Prisma.$MedicalRecordPayload, S>

  type MedicalRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicalRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicalRecordCountAggregateInputType | true
    }

  export interface MedicalRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalRecord'], meta: { name: 'MedicalRecord' } }
    /**
     * Find zero or one MedicalRecord that matches the filter.
     * @param {MedicalRecordFindUniqueArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalRecordFindUniqueArgs>(args: SelectSubset<T, MedicalRecordFindUniqueArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicalRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicalRecordFindUniqueOrThrowArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordFindFirstArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalRecordFindFirstArgs>(args?: SelectSubset<T, MedicalRecordFindFirstArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordFindFirstOrThrowArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicalRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalRecords
     * const medicalRecords = await prisma.medicalRecord.findMany()
     * 
     * // Get first 10 MedicalRecords
     * const medicalRecords = await prisma.medicalRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalRecordWithIdOnly = await prisma.medicalRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicalRecordFindManyArgs>(args?: SelectSubset<T, MedicalRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicalRecord.
     * @param {MedicalRecordCreateArgs} args - Arguments to create a MedicalRecord.
     * @example
     * // Create one MedicalRecord
     * const MedicalRecord = await prisma.medicalRecord.create({
     *   data: {
     *     // ... data to create a MedicalRecord
     *   }
     * })
     * 
     */
    create<T extends MedicalRecordCreateArgs>(args: SelectSubset<T, MedicalRecordCreateArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicalRecords.
     * @param {MedicalRecordCreateManyArgs} args - Arguments to create many MedicalRecords.
     * @example
     * // Create many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalRecordCreateManyArgs>(args?: SelectSubset<T, MedicalRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicalRecords and returns the data saved in the database.
     * @param {MedicalRecordCreateManyAndReturnArgs} args - Arguments to create many MedicalRecords.
     * @example
     * // Create many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicalRecords and only return the `id`
     * const medicalRecordWithIdOnly = await prisma.medicalRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicalRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicalRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicalRecord.
     * @param {MedicalRecordDeleteArgs} args - Arguments to delete one MedicalRecord.
     * @example
     * // Delete one MedicalRecord
     * const MedicalRecord = await prisma.medicalRecord.delete({
     *   where: {
     *     // ... filter to delete one MedicalRecord
     *   }
     * })
     * 
     */
    delete<T extends MedicalRecordDeleteArgs>(args: SelectSubset<T, MedicalRecordDeleteArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicalRecord.
     * @param {MedicalRecordUpdateArgs} args - Arguments to update one MedicalRecord.
     * @example
     * // Update one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalRecordUpdateArgs>(args: SelectSubset<T, MedicalRecordUpdateArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicalRecords.
     * @param {MedicalRecordDeleteManyArgs} args - Arguments to filter MedicalRecords to delete.
     * @example
     * // Delete a few MedicalRecords
     * const { count } = await prisma.medicalRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalRecordDeleteManyArgs>(args?: SelectSubset<T, MedicalRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalRecordUpdateManyArgs>(args: SelectSubset<T, MedicalRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalRecords and returns the data updated in the database.
     * @param {MedicalRecordUpdateManyAndReturnArgs} args - Arguments to update many MedicalRecords.
     * @example
     * // Update many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicalRecords and only return the `id`
     * const medicalRecordWithIdOnly = await prisma.medicalRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicalRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicalRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicalRecord.
     * @param {MedicalRecordUpsertArgs} args - Arguments to update or create a MedicalRecord.
     * @example
     * // Update or create a MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.upsert({
     *   create: {
     *     // ... data to create a MedicalRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalRecord we want to update
     *   }
     * })
     */
    upsert<T extends MedicalRecordUpsertArgs>(args: SelectSubset<T, MedicalRecordUpsertArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordCountArgs} args - Arguments to filter MedicalRecords to count.
     * @example
     * // Count the number of MedicalRecords
     * const count = await prisma.medicalRecord.count({
     *   where: {
     *     // ... the filter for the MedicalRecords we want to count
     *   }
     * })
    **/
    count<T extends MedicalRecordCountArgs>(
      args?: Subset<T, MedicalRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicalRecordAggregateArgs>(args: Subset<T, MedicalRecordAggregateArgs>): Prisma.PrismaPromise<GetMedicalRecordAggregateType<T>>

    /**
     * Group by MedicalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicalRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalRecordGroupByArgs['orderBy'] }
        : { orderBy?: MedicalRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicalRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalRecord model
   */
  readonly fields: MedicalRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prescriptions<T extends MedicalRecord$prescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, MedicalRecord$prescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    labTests<T extends MedicalRecord$labTestsArgs<ExtArgs> = {}>(args?: Subset<T, MedicalRecord$labTestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MedicalRecord model
   */
  interface MedicalRecordFieldRefs {
    readonly id: FieldRef<"MedicalRecord", 'String'>
    readonly diagnosis: FieldRef<"MedicalRecord", 'String'>
    readonly notes: FieldRef<"MedicalRecord", 'String'>
    readonly createdAt: FieldRef<"MedicalRecord", 'DateTime'>
    readonly patientId: FieldRef<"MedicalRecord", 'String'>
    readonly doctorId: FieldRef<"MedicalRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MedicalRecord findUnique
   */
  export type MedicalRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord findUniqueOrThrow
   */
  export type MedicalRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord findFirst
   */
  export type MedicalRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalRecords.
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalRecords.
     */
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord findFirstOrThrow
   */
  export type MedicalRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalRecords.
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalRecords.
     */
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord findMany
   */
  export type MedicalRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecords to fetch.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalRecords.
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord create
   */
  export type MedicalRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalRecord.
     */
    data: XOR<MedicalRecordCreateInput, MedicalRecordUncheckedCreateInput>
  }

  /**
   * MedicalRecord createMany
   */
  export type MedicalRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalRecords.
     */
    data: MedicalRecordCreateManyInput | MedicalRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicalRecord createManyAndReturn
   */
  export type MedicalRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * The data used to create many MedicalRecords.
     */
    data: MedicalRecordCreateManyInput | MedicalRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalRecord update
   */
  export type MedicalRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalRecord.
     */
    data: XOR<MedicalRecordUpdateInput, MedicalRecordUncheckedUpdateInput>
    /**
     * Choose, which MedicalRecord to update.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord updateMany
   */
  export type MedicalRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalRecords.
     */
    data: XOR<MedicalRecordUpdateManyMutationInput, MedicalRecordUncheckedUpdateManyInput>
    /**
     * Filter which MedicalRecords to update
     */
    where?: MedicalRecordWhereInput
    /**
     * Limit how many MedicalRecords to update.
     */
    limit?: number
  }

  /**
   * MedicalRecord updateManyAndReturn
   */
  export type MedicalRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * The data used to update MedicalRecords.
     */
    data: XOR<MedicalRecordUpdateManyMutationInput, MedicalRecordUncheckedUpdateManyInput>
    /**
     * Filter which MedicalRecords to update
     */
    where?: MedicalRecordWhereInput
    /**
     * Limit how many MedicalRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalRecord upsert
   */
  export type MedicalRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalRecord to update in case it exists.
     */
    where: MedicalRecordWhereUniqueInput
    /**
     * In case the MedicalRecord found by the `where` argument doesn't exist, create a new MedicalRecord with this data.
     */
    create: XOR<MedicalRecordCreateInput, MedicalRecordUncheckedCreateInput>
    /**
     * In case the MedicalRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalRecordUpdateInput, MedicalRecordUncheckedUpdateInput>
  }

  /**
   * MedicalRecord delete
   */
  export type MedicalRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter which MedicalRecord to delete.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord deleteMany
   */
  export type MedicalRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalRecords to delete
     */
    where?: MedicalRecordWhereInput
    /**
     * Limit how many MedicalRecords to delete.
     */
    limit?: number
  }

  /**
   * MedicalRecord.prescriptions
   */
  export type MedicalRecord$prescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * MedicalRecord.labTests
   */
  export type MedicalRecord$labTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    where?: LabTestWhereInput
    orderBy?: LabTestOrderByWithRelationInput | LabTestOrderByWithRelationInput[]
    cursor?: LabTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabTestScalarFieldEnum | LabTestScalarFieldEnum[]
  }

  /**
   * MedicalRecord without action
   */
  export type MedicalRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
  }


  /**
   * Model MedicationInventory
   */

  export type AggregateMedicationInventory = {
    _count: MedicationInventoryCountAggregateOutputType | null
    _avg: MedicationInventoryAvgAggregateOutputType | null
    _sum: MedicationInventorySumAggregateOutputType | null
    _min: MedicationInventoryMinAggregateOutputType | null
    _max: MedicationInventoryMaxAggregateOutputType | null
  }

  export type MedicationInventoryAvgAggregateOutputType = {
    quantity: number | null
    reorderLevel: number | null
  }

  export type MedicationInventorySumAggregateOutputType = {
    quantity: number | null
    reorderLevel: number | null
  }

  export type MedicationInventoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    form: string | null
    strength: string | null
    batchNumber: string | null
    quantity: number | null
    reorderLevel: number | null
    status: $Enums.MedicationStatus | null
    supplier: string | null
    orderDate: Date | null
    arrivalDate: Date | null
    expiryDate: Date | null
    reservedFor: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicationInventoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    form: string | null
    strength: string | null
    batchNumber: string | null
    quantity: number | null
    reorderLevel: number | null
    status: $Enums.MedicationStatus | null
    supplier: string | null
    orderDate: Date | null
    arrivalDate: Date | null
    expiryDate: Date | null
    reservedFor: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicationInventoryCountAggregateOutputType = {
    id: number
    name: number
    form: number
    strength: number
    batchNumber: number
    quantity: number
    reorderLevel: number
    status: number
    supplier: number
    orderDate: number
    arrivalDate: number
    expiryDate: number
    reservedFor: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicationInventoryAvgAggregateInputType = {
    quantity?: true
    reorderLevel?: true
  }

  export type MedicationInventorySumAggregateInputType = {
    quantity?: true
    reorderLevel?: true
  }

  export type MedicationInventoryMinAggregateInputType = {
    id?: true
    name?: true
    form?: true
    strength?: true
    batchNumber?: true
    quantity?: true
    reorderLevel?: true
    status?: true
    supplier?: true
    orderDate?: true
    arrivalDate?: true
    expiryDate?: true
    reservedFor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicationInventoryMaxAggregateInputType = {
    id?: true
    name?: true
    form?: true
    strength?: true
    batchNumber?: true
    quantity?: true
    reorderLevel?: true
    status?: true
    supplier?: true
    orderDate?: true
    arrivalDate?: true
    expiryDate?: true
    reservedFor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicationInventoryCountAggregateInputType = {
    id?: true
    name?: true
    form?: true
    strength?: true
    batchNumber?: true
    quantity?: true
    reorderLevel?: true
    status?: true
    supplier?: true
    orderDate?: true
    arrivalDate?: true
    expiryDate?: true
    reservedFor?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicationInventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicationInventory to aggregate.
     */
    where?: MedicationInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationInventories to fetch.
     */
    orderBy?: MedicationInventoryOrderByWithRelationInput | MedicationInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicationInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicationInventories
    **/
    _count?: true | MedicationInventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicationInventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicationInventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicationInventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicationInventoryMaxAggregateInputType
  }

  export type GetMedicationInventoryAggregateType<T extends MedicationInventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicationInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicationInventory[P]>
      : GetScalarType<T[P], AggregateMedicationInventory[P]>
  }




  export type MedicationInventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationInventoryWhereInput
    orderBy?: MedicationInventoryOrderByWithAggregationInput | MedicationInventoryOrderByWithAggregationInput[]
    by: MedicationInventoryScalarFieldEnum[] | MedicationInventoryScalarFieldEnum
    having?: MedicationInventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicationInventoryCountAggregateInputType | true
    _avg?: MedicationInventoryAvgAggregateInputType
    _sum?: MedicationInventorySumAggregateInputType
    _min?: MedicationInventoryMinAggregateInputType
    _max?: MedicationInventoryMaxAggregateInputType
  }

  export type MedicationInventoryGroupByOutputType = {
    id: string
    name: string
    form: string
    strength: string
    batchNumber: string
    quantity: number
    reorderLevel: number
    status: $Enums.MedicationStatus
    supplier: string | null
    orderDate: Date | null
    arrivalDate: Date | null
    expiryDate: Date | null
    reservedFor: string | null
    createdAt: Date
    updatedAt: Date
    _count: MedicationInventoryCountAggregateOutputType | null
    _avg: MedicationInventoryAvgAggregateOutputType | null
    _sum: MedicationInventorySumAggregateOutputType | null
    _min: MedicationInventoryMinAggregateOutputType | null
    _max: MedicationInventoryMaxAggregateOutputType | null
  }

  type GetMedicationInventoryGroupByPayload<T extends MedicationInventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicationInventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicationInventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicationInventoryGroupByOutputType[P]>
            : GetScalarType<T[P], MedicationInventoryGroupByOutputType[P]>
        }
      >
    >


  export type MedicationInventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    form?: boolean
    strength?: boolean
    batchNumber?: boolean
    quantity?: boolean
    reorderLevel?: boolean
    status?: boolean
    supplier?: boolean
    orderDate?: boolean
    arrivalDate?: boolean
    expiryDate?: boolean
    reservedFor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prescriptions?: boolean | MedicationInventory$prescriptionsArgs<ExtArgs>
    _count?: boolean | MedicationInventoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicationInventory"]>

  export type MedicationInventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    form?: boolean
    strength?: boolean
    batchNumber?: boolean
    quantity?: boolean
    reorderLevel?: boolean
    status?: boolean
    supplier?: boolean
    orderDate?: boolean
    arrivalDate?: boolean
    expiryDate?: boolean
    reservedFor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["medicationInventory"]>

  export type MedicationInventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    form?: boolean
    strength?: boolean
    batchNumber?: boolean
    quantity?: boolean
    reorderLevel?: boolean
    status?: boolean
    supplier?: boolean
    orderDate?: boolean
    arrivalDate?: boolean
    expiryDate?: boolean
    reservedFor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["medicationInventory"]>

  export type MedicationInventorySelectScalar = {
    id?: boolean
    name?: boolean
    form?: boolean
    strength?: boolean
    batchNumber?: boolean
    quantity?: boolean
    reorderLevel?: boolean
    status?: boolean
    supplier?: boolean
    orderDate?: boolean
    arrivalDate?: boolean
    expiryDate?: boolean
    reservedFor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicationInventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "form" | "strength" | "batchNumber" | "quantity" | "reorderLevel" | "status" | "supplier" | "orderDate" | "arrivalDate" | "expiryDate" | "reservedFor" | "createdAt" | "updatedAt", ExtArgs["result"]["medicationInventory"]>
  export type MedicationInventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescriptions?: boolean | MedicationInventory$prescriptionsArgs<ExtArgs>
    _count?: boolean | MedicationInventoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicationInventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MedicationInventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MedicationInventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicationInventory"
    objects: {
      prescriptions: Prisma.$PrescriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      form: string
      strength: string
      batchNumber: string
      quantity: number
      reorderLevel: number
      status: $Enums.MedicationStatus
      supplier: string | null
      orderDate: Date | null
      arrivalDate: Date | null
      expiryDate: Date | null
      reservedFor: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medicationInventory"]>
    composites: {}
  }

  type MedicationInventoryGetPayload<S extends boolean | null | undefined | MedicationInventoryDefaultArgs> = $Result.GetResult<Prisma.$MedicationInventoryPayload, S>

  type MedicationInventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicationInventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicationInventoryCountAggregateInputType | true
    }

  export interface MedicationInventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicationInventory'], meta: { name: 'MedicationInventory' } }
    /**
     * Find zero or one MedicationInventory that matches the filter.
     * @param {MedicationInventoryFindUniqueArgs} args - Arguments to find a MedicationInventory
     * @example
     * // Get one MedicationInventory
     * const medicationInventory = await prisma.medicationInventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicationInventoryFindUniqueArgs>(args: SelectSubset<T, MedicationInventoryFindUniqueArgs<ExtArgs>>): Prisma__MedicationInventoryClient<$Result.GetResult<Prisma.$MedicationInventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicationInventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicationInventoryFindUniqueOrThrowArgs} args - Arguments to find a MedicationInventory
     * @example
     * // Get one MedicationInventory
     * const medicationInventory = await prisma.medicationInventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicationInventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicationInventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicationInventoryClient<$Result.GetResult<Prisma.$MedicationInventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicationInventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationInventoryFindFirstArgs} args - Arguments to find a MedicationInventory
     * @example
     * // Get one MedicationInventory
     * const medicationInventory = await prisma.medicationInventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicationInventoryFindFirstArgs>(args?: SelectSubset<T, MedicationInventoryFindFirstArgs<ExtArgs>>): Prisma__MedicationInventoryClient<$Result.GetResult<Prisma.$MedicationInventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicationInventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationInventoryFindFirstOrThrowArgs} args - Arguments to find a MedicationInventory
     * @example
     * // Get one MedicationInventory
     * const medicationInventory = await prisma.medicationInventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicationInventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicationInventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicationInventoryClient<$Result.GetResult<Prisma.$MedicationInventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicationInventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationInventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicationInventories
     * const medicationInventories = await prisma.medicationInventory.findMany()
     * 
     * // Get first 10 MedicationInventories
     * const medicationInventories = await prisma.medicationInventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicationInventoryWithIdOnly = await prisma.medicationInventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicationInventoryFindManyArgs>(args?: SelectSubset<T, MedicationInventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicationInventory.
     * @param {MedicationInventoryCreateArgs} args - Arguments to create a MedicationInventory.
     * @example
     * // Create one MedicationInventory
     * const MedicationInventory = await prisma.medicationInventory.create({
     *   data: {
     *     // ... data to create a MedicationInventory
     *   }
     * })
     * 
     */
    create<T extends MedicationInventoryCreateArgs>(args: SelectSubset<T, MedicationInventoryCreateArgs<ExtArgs>>): Prisma__MedicationInventoryClient<$Result.GetResult<Prisma.$MedicationInventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicationInventories.
     * @param {MedicationInventoryCreateManyArgs} args - Arguments to create many MedicationInventories.
     * @example
     * // Create many MedicationInventories
     * const medicationInventory = await prisma.medicationInventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicationInventoryCreateManyArgs>(args?: SelectSubset<T, MedicationInventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicationInventories and returns the data saved in the database.
     * @param {MedicationInventoryCreateManyAndReturnArgs} args - Arguments to create many MedicationInventories.
     * @example
     * // Create many MedicationInventories
     * const medicationInventory = await prisma.medicationInventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicationInventories and only return the `id`
     * const medicationInventoryWithIdOnly = await prisma.medicationInventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicationInventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicationInventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationInventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicationInventory.
     * @param {MedicationInventoryDeleteArgs} args - Arguments to delete one MedicationInventory.
     * @example
     * // Delete one MedicationInventory
     * const MedicationInventory = await prisma.medicationInventory.delete({
     *   where: {
     *     // ... filter to delete one MedicationInventory
     *   }
     * })
     * 
     */
    delete<T extends MedicationInventoryDeleteArgs>(args: SelectSubset<T, MedicationInventoryDeleteArgs<ExtArgs>>): Prisma__MedicationInventoryClient<$Result.GetResult<Prisma.$MedicationInventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicationInventory.
     * @param {MedicationInventoryUpdateArgs} args - Arguments to update one MedicationInventory.
     * @example
     * // Update one MedicationInventory
     * const medicationInventory = await prisma.medicationInventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicationInventoryUpdateArgs>(args: SelectSubset<T, MedicationInventoryUpdateArgs<ExtArgs>>): Prisma__MedicationInventoryClient<$Result.GetResult<Prisma.$MedicationInventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicationInventories.
     * @param {MedicationInventoryDeleteManyArgs} args - Arguments to filter MedicationInventories to delete.
     * @example
     * // Delete a few MedicationInventories
     * const { count } = await prisma.medicationInventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicationInventoryDeleteManyArgs>(args?: SelectSubset<T, MedicationInventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicationInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationInventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicationInventories
     * const medicationInventory = await prisma.medicationInventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicationInventoryUpdateManyArgs>(args: SelectSubset<T, MedicationInventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicationInventories and returns the data updated in the database.
     * @param {MedicationInventoryUpdateManyAndReturnArgs} args - Arguments to update many MedicationInventories.
     * @example
     * // Update many MedicationInventories
     * const medicationInventory = await prisma.medicationInventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicationInventories and only return the `id`
     * const medicationInventoryWithIdOnly = await prisma.medicationInventory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicationInventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicationInventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationInventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicationInventory.
     * @param {MedicationInventoryUpsertArgs} args - Arguments to update or create a MedicationInventory.
     * @example
     * // Update or create a MedicationInventory
     * const medicationInventory = await prisma.medicationInventory.upsert({
     *   create: {
     *     // ... data to create a MedicationInventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicationInventory we want to update
     *   }
     * })
     */
    upsert<T extends MedicationInventoryUpsertArgs>(args: SelectSubset<T, MedicationInventoryUpsertArgs<ExtArgs>>): Prisma__MedicationInventoryClient<$Result.GetResult<Prisma.$MedicationInventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicationInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationInventoryCountArgs} args - Arguments to filter MedicationInventories to count.
     * @example
     * // Count the number of MedicationInventories
     * const count = await prisma.medicationInventory.count({
     *   where: {
     *     // ... the filter for the MedicationInventories we want to count
     *   }
     * })
    **/
    count<T extends MedicationInventoryCountArgs>(
      args?: Subset<T, MedicationInventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicationInventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicationInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationInventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicationInventoryAggregateArgs>(args: Subset<T, MedicationInventoryAggregateArgs>): Prisma.PrismaPromise<GetMedicationInventoryAggregateType<T>>

    /**
     * Group by MedicationInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationInventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicationInventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicationInventoryGroupByArgs['orderBy'] }
        : { orderBy?: MedicationInventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicationInventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicationInventory model
   */
  readonly fields: MedicationInventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicationInventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicationInventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prescriptions<T extends MedicationInventory$prescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, MedicationInventory$prescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MedicationInventory model
   */
  interface MedicationInventoryFieldRefs {
    readonly id: FieldRef<"MedicationInventory", 'String'>
    readonly name: FieldRef<"MedicationInventory", 'String'>
    readonly form: FieldRef<"MedicationInventory", 'String'>
    readonly strength: FieldRef<"MedicationInventory", 'String'>
    readonly batchNumber: FieldRef<"MedicationInventory", 'String'>
    readonly quantity: FieldRef<"MedicationInventory", 'Int'>
    readonly reorderLevel: FieldRef<"MedicationInventory", 'Int'>
    readonly status: FieldRef<"MedicationInventory", 'MedicationStatus'>
    readonly supplier: FieldRef<"MedicationInventory", 'String'>
    readonly orderDate: FieldRef<"MedicationInventory", 'DateTime'>
    readonly arrivalDate: FieldRef<"MedicationInventory", 'DateTime'>
    readonly expiryDate: FieldRef<"MedicationInventory", 'DateTime'>
    readonly reservedFor: FieldRef<"MedicationInventory", 'String'>
    readonly createdAt: FieldRef<"MedicationInventory", 'DateTime'>
    readonly updatedAt: FieldRef<"MedicationInventory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicationInventory findUnique
   */
  export type MedicationInventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationInventory
     */
    select?: MedicationInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationInventory
     */
    omit?: MedicationInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInventoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicationInventory to fetch.
     */
    where: MedicationInventoryWhereUniqueInput
  }

  /**
   * MedicationInventory findUniqueOrThrow
   */
  export type MedicationInventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationInventory
     */
    select?: MedicationInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationInventory
     */
    omit?: MedicationInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInventoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicationInventory to fetch.
     */
    where: MedicationInventoryWhereUniqueInput
  }

  /**
   * MedicationInventory findFirst
   */
  export type MedicationInventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationInventory
     */
    select?: MedicationInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationInventory
     */
    omit?: MedicationInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInventoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicationInventory to fetch.
     */
    where?: MedicationInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationInventories to fetch.
     */
    orderBy?: MedicationInventoryOrderByWithRelationInput | MedicationInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicationInventories.
     */
    cursor?: MedicationInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicationInventories.
     */
    distinct?: MedicationInventoryScalarFieldEnum | MedicationInventoryScalarFieldEnum[]
  }

  /**
   * MedicationInventory findFirstOrThrow
   */
  export type MedicationInventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationInventory
     */
    select?: MedicationInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationInventory
     */
    omit?: MedicationInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInventoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicationInventory to fetch.
     */
    where?: MedicationInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationInventories to fetch.
     */
    orderBy?: MedicationInventoryOrderByWithRelationInput | MedicationInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicationInventories.
     */
    cursor?: MedicationInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicationInventories.
     */
    distinct?: MedicationInventoryScalarFieldEnum | MedicationInventoryScalarFieldEnum[]
  }

  /**
   * MedicationInventory findMany
   */
  export type MedicationInventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationInventory
     */
    select?: MedicationInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationInventory
     */
    omit?: MedicationInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInventoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicationInventories to fetch.
     */
    where?: MedicationInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationInventories to fetch.
     */
    orderBy?: MedicationInventoryOrderByWithRelationInput | MedicationInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicationInventories.
     */
    cursor?: MedicationInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationInventories.
     */
    skip?: number
    distinct?: MedicationInventoryScalarFieldEnum | MedicationInventoryScalarFieldEnum[]
  }

  /**
   * MedicationInventory create
   */
  export type MedicationInventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationInventory
     */
    select?: MedicationInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationInventory
     */
    omit?: MedicationInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicationInventory.
     */
    data: XOR<MedicationInventoryCreateInput, MedicationInventoryUncheckedCreateInput>
  }

  /**
   * MedicationInventory createMany
   */
  export type MedicationInventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicationInventories.
     */
    data: MedicationInventoryCreateManyInput | MedicationInventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicationInventory createManyAndReturn
   */
  export type MedicationInventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationInventory
     */
    select?: MedicationInventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationInventory
     */
    omit?: MedicationInventoryOmit<ExtArgs> | null
    /**
     * The data used to create many MedicationInventories.
     */
    data: MedicationInventoryCreateManyInput | MedicationInventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicationInventory update
   */
  export type MedicationInventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationInventory
     */
    select?: MedicationInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationInventory
     */
    omit?: MedicationInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicationInventory.
     */
    data: XOR<MedicationInventoryUpdateInput, MedicationInventoryUncheckedUpdateInput>
    /**
     * Choose, which MedicationInventory to update.
     */
    where: MedicationInventoryWhereUniqueInput
  }

  /**
   * MedicationInventory updateMany
   */
  export type MedicationInventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicationInventories.
     */
    data: XOR<MedicationInventoryUpdateManyMutationInput, MedicationInventoryUncheckedUpdateManyInput>
    /**
     * Filter which MedicationInventories to update
     */
    where?: MedicationInventoryWhereInput
    /**
     * Limit how many MedicationInventories to update.
     */
    limit?: number
  }

  /**
   * MedicationInventory updateManyAndReturn
   */
  export type MedicationInventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationInventory
     */
    select?: MedicationInventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationInventory
     */
    omit?: MedicationInventoryOmit<ExtArgs> | null
    /**
     * The data used to update MedicationInventories.
     */
    data: XOR<MedicationInventoryUpdateManyMutationInput, MedicationInventoryUncheckedUpdateManyInput>
    /**
     * Filter which MedicationInventories to update
     */
    where?: MedicationInventoryWhereInput
    /**
     * Limit how many MedicationInventories to update.
     */
    limit?: number
  }

  /**
   * MedicationInventory upsert
   */
  export type MedicationInventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationInventory
     */
    select?: MedicationInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationInventory
     */
    omit?: MedicationInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicationInventory to update in case it exists.
     */
    where: MedicationInventoryWhereUniqueInput
    /**
     * In case the MedicationInventory found by the `where` argument doesn't exist, create a new MedicationInventory with this data.
     */
    create: XOR<MedicationInventoryCreateInput, MedicationInventoryUncheckedCreateInput>
    /**
     * In case the MedicationInventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicationInventoryUpdateInput, MedicationInventoryUncheckedUpdateInput>
  }

  /**
   * MedicationInventory delete
   */
  export type MedicationInventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationInventory
     */
    select?: MedicationInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationInventory
     */
    omit?: MedicationInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInventoryInclude<ExtArgs> | null
    /**
     * Filter which MedicationInventory to delete.
     */
    where: MedicationInventoryWhereUniqueInput
  }

  /**
   * MedicationInventory deleteMany
   */
  export type MedicationInventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicationInventories to delete
     */
    where?: MedicationInventoryWhereInput
    /**
     * Limit how many MedicationInventories to delete.
     */
    limit?: number
  }

  /**
   * MedicationInventory.prescriptions
   */
  export type MedicationInventory$prescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * MedicationInventory without action
   */
  export type MedicationInventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationInventory
     */
    select?: MedicationInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationInventory
     */
    omit?: MedicationInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInventoryInclude<ExtArgs> | null
  }


  /**
   * Model Prescription
   */

  export type AggregatePrescription = {
    _count: PrescriptionCountAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  export type PrescriptionMinAggregateOutputType = {
    id: string | null
    patientMedicationId: string | null
    medicationInventoryId: string | null
    createdAt: Date | null
    medicalRecordId: string | null
  }

  export type PrescriptionMaxAggregateOutputType = {
    id: string | null
    patientMedicationId: string | null
    medicationInventoryId: string | null
    createdAt: Date | null
    medicalRecordId: string | null
  }

  export type PrescriptionCountAggregateOutputType = {
    id: number
    patientMedicationId: number
    medicationInventoryId: number
    createdAt: number
    medicalRecordId: number
    _all: number
  }


  export type PrescriptionMinAggregateInputType = {
    id?: true
    patientMedicationId?: true
    medicationInventoryId?: true
    createdAt?: true
    medicalRecordId?: true
  }

  export type PrescriptionMaxAggregateInputType = {
    id?: true
    patientMedicationId?: true
    medicationInventoryId?: true
    createdAt?: true
    medicalRecordId?: true
  }

  export type PrescriptionCountAggregateInputType = {
    id?: true
    patientMedicationId?: true
    medicationInventoryId?: true
    createdAt?: true
    medicalRecordId?: true
    _all?: true
  }

  export type PrescriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prescription to aggregate.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prescriptions
    **/
    _count?: true | PrescriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrescriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrescriptionMaxAggregateInputType
  }

  export type GetPrescriptionAggregateType<T extends PrescriptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePrescription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrescription[P]>
      : GetScalarType<T[P], AggregatePrescription[P]>
  }




  export type PrescriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithAggregationInput | PrescriptionOrderByWithAggregationInput[]
    by: PrescriptionScalarFieldEnum[] | PrescriptionScalarFieldEnum
    having?: PrescriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrescriptionCountAggregateInputType | true
    _min?: PrescriptionMinAggregateInputType
    _max?: PrescriptionMaxAggregateInputType
  }

  export type PrescriptionGroupByOutputType = {
    id: string
    patientMedicationId: string
    medicationInventoryId: string
    createdAt: Date
    medicalRecordId: string
    _count: PrescriptionCountAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  type GetPrescriptionGroupByPayload<T extends PrescriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrescriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrescriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
            : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
        }
      >
    >


  export type PrescriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientMedicationId?: boolean
    medicationInventoryId?: boolean
    createdAt?: boolean
    medicalRecordId?: boolean
    medicalRecord?: boolean | MedicalRecordDefaultArgs<ExtArgs>
    patientMedication?: boolean | PatientMedicationDefaultArgs<ExtArgs>
    medication?: boolean | MedicationInventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientMedicationId?: boolean
    medicationInventoryId?: boolean
    createdAt?: boolean
    medicalRecordId?: boolean
    medicalRecord?: boolean | MedicalRecordDefaultArgs<ExtArgs>
    patientMedication?: boolean | PatientMedicationDefaultArgs<ExtArgs>
    medication?: boolean | MedicationInventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientMedicationId?: boolean
    medicationInventoryId?: boolean
    createdAt?: boolean
    medicalRecordId?: boolean
    medicalRecord?: boolean | MedicalRecordDefaultArgs<ExtArgs>
    patientMedication?: boolean | PatientMedicationDefaultArgs<ExtArgs>
    medication?: boolean | MedicationInventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectScalar = {
    id?: boolean
    patientMedicationId?: boolean
    medicationInventoryId?: boolean
    createdAt?: boolean
    medicalRecordId?: boolean
  }

  export type PrescriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientMedicationId" | "medicationInventoryId" | "createdAt" | "medicalRecordId", ExtArgs["result"]["prescription"]>
  export type PrescriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicalRecord?: boolean | MedicalRecordDefaultArgs<ExtArgs>
    patientMedication?: boolean | PatientMedicationDefaultArgs<ExtArgs>
    medication?: boolean | MedicationInventoryDefaultArgs<ExtArgs>
  }
  export type PrescriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicalRecord?: boolean | MedicalRecordDefaultArgs<ExtArgs>
    patientMedication?: boolean | PatientMedicationDefaultArgs<ExtArgs>
    medication?: boolean | MedicationInventoryDefaultArgs<ExtArgs>
  }
  export type PrescriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicalRecord?: boolean | MedicalRecordDefaultArgs<ExtArgs>
    patientMedication?: boolean | PatientMedicationDefaultArgs<ExtArgs>
    medication?: boolean | MedicationInventoryDefaultArgs<ExtArgs>
  }

  export type $PrescriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prescription"
    objects: {
      medicalRecord: Prisma.$MedicalRecordPayload<ExtArgs>
      patientMedication: Prisma.$PatientMedicationPayload<ExtArgs>
      medication: Prisma.$MedicationInventoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientMedicationId: string
      medicationInventoryId: string
      createdAt: Date
      medicalRecordId: string
    }, ExtArgs["result"]["prescription"]>
    composites: {}
  }

  type PrescriptionGetPayload<S extends boolean | null | undefined | PrescriptionDefaultArgs> = $Result.GetResult<Prisma.$PrescriptionPayload, S>

  type PrescriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrescriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrescriptionCountAggregateInputType | true
    }

  export interface PrescriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prescription'], meta: { name: 'Prescription' } }
    /**
     * Find zero or one Prescription that matches the filter.
     * @param {PrescriptionFindUniqueArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrescriptionFindUniqueArgs>(args: SelectSubset<T, PrescriptionFindUniqueArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prescription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrescriptionFindUniqueOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrescriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, PrescriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrescriptionFindFirstArgs>(args?: SelectSubset<T, PrescriptionFindFirstArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrescriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, PrescriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prescriptions
     * const prescriptions = await prisma.prescription.findMany()
     * 
     * // Get first 10 Prescriptions
     * const prescriptions = await prisma.prescription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrescriptionFindManyArgs>(args?: SelectSubset<T, PrescriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prescription.
     * @param {PrescriptionCreateArgs} args - Arguments to create a Prescription.
     * @example
     * // Create one Prescription
     * const Prescription = await prisma.prescription.create({
     *   data: {
     *     // ... data to create a Prescription
     *   }
     * })
     * 
     */
    create<T extends PrescriptionCreateArgs>(args: SelectSubset<T, PrescriptionCreateArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prescriptions.
     * @param {PrescriptionCreateManyArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescription = await prisma.prescription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrescriptionCreateManyArgs>(args?: SelectSubset<T, PrescriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prescriptions and returns the data saved in the database.
     * @param {PrescriptionCreateManyAndReturnArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescription = await prisma.prescription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prescriptions and only return the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrescriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, PrescriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prescription.
     * @param {PrescriptionDeleteArgs} args - Arguments to delete one Prescription.
     * @example
     * // Delete one Prescription
     * const Prescription = await prisma.prescription.delete({
     *   where: {
     *     // ... filter to delete one Prescription
     *   }
     * })
     * 
     */
    delete<T extends PrescriptionDeleteArgs>(args: SelectSubset<T, PrescriptionDeleteArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prescription.
     * @param {PrescriptionUpdateArgs} args - Arguments to update one Prescription.
     * @example
     * // Update one Prescription
     * const prescription = await prisma.prescription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrescriptionUpdateArgs>(args: SelectSubset<T, PrescriptionUpdateArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prescriptions.
     * @param {PrescriptionDeleteManyArgs} args - Arguments to filter Prescriptions to delete.
     * @example
     * // Delete a few Prescriptions
     * const { count } = await prisma.prescription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrescriptionDeleteManyArgs>(args?: SelectSubset<T, PrescriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrescriptionUpdateManyArgs>(args: SelectSubset<T, PrescriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions and returns the data updated in the database.
     * @param {PrescriptionUpdateManyAndReturnArgs} args - Arguments to update many Prescriptions.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prescriptions and only return the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrescriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, PrescriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prescription.
     * @param {PrescriptionUpsertArgs} args - Arguments to update or create a Prescription.
     * @example
     * // Update or create a Prescription
     * const prescription = await prisma.prescription.upsert({
     *   create: {
     *     // ... data to create a Prescription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prescription we want to update
     *   }
     * })
     */
    upsert<T extends PrescriptionUpsertArgs>(args: SelectSubset<T, PrescriptionUpsertArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionCountArgs} args - Arguments to filter Prescriptions to count.
     * @example
     * // Count the number of Prescriptions
     * const count = await prisma.prescription.count({
     *   where: {
     *     // ... the filter for the Prescriptions we want to count
     *   }
     * })
    **/
    count<T extends PrescriptionCountArgs>(
      args?: Subset<T, PrescriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrescriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrescriptionAggregateArgs>(args: Subset<T, PrescriptionAggregateArgs>): Prisma.PrismaPromise<GetPrescriptionAggregateType<T>>

    /**
     * Group by Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrescriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrescriptionGroupByArgs['orderBy'] }
        : { orderBy?: PrescriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prescription model
   */
  readonly fields: PrescriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prescription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrescriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicalRecord<T extends MedicalRecordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicalRecordDefaultArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patientMedication<T extends PatientMedicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientMedicationDefaultArgs<ExtArgs>>): Prisma__PatientMedicationClient<$Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medication<T extends MedicationInventoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicationInventoryDefaultArgs<ExtArgs>>): Prisma__MedicationInventoryClient<$Result.GetResult<Prisma.$MedicationInventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prescription model
   */
  interface PrescriptionFieldRefs {
    readonly id: FieldRef<"Prescription", 'String'>
    readonly patientMedicationId: FieldRef<"Prescription", 'String'>
    readonly medicationInventoryId: FieldRef<"Prescription", 'String'>
    readonly createdAt: FieldRef<"Prescription", 'DateTime'>
    readonly medicalRecordId: FieldRef<"Prescription", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Prescription findUnique
   */
  export type PrescriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findUniqueOrThrow
   */
  export type PrescriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findFirst
   */
  export type PrescriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription findFirstOrThrow
   */
  export type PrescriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription findMany
   */
  export type PrescriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescriptions to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription create
   */
  export type PrescriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Prescription.
     */
    data: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
  }

  /**
   * Prescription createMany
   */
  export type PrescriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prescriptions.
     */
    data: PrescriptionCreateManyInput | PrescriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prescription createManyAndReturn
   */
  export type PrescriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Prescriptions.
     */
    data: PrescriptionCreateManyInput | PrescriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prescription update
   */
  export type PrescriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Prescription.
     */
    data: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
    /**
     * Choose, which Prescription to update.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription updateMany
   */
  export type PrescriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prescriptions.
     */
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyInput>
    /**
     * Filter which Prescriptions to update
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to update.
     */
    limit?: number
  }

  /**
   * Prescription updateManyAndReturn
   */
  export type PrescriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * The data used to update Prescriptions.
     */
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyInput>
    /**
     * Filter which Prescriptions to update
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prescription upsert
   */
  export type PrescriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Prescription to update in case it exists.
     */
    where: PrescriptionWhereUniqueInput
    /**
     * In case the Prescription found by the `where` argument doesn't exist, create a new Prescription with this data.
     */
    create: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
    /**
     * In case the Prescription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
  }

  /**
   * Prescription delete
   */
  export type PrescriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter which Prescription to delete.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription deleteMany
   */
  export type PrescriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prescriptions to delete
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to delete.
     */
    limit?: number
  }

  /**
   * Prescription without action
   */
  export type PrescriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
  }


  /**
   * Model PatientMedication
   */

  export type AggregatePatientMedication = {
    _count: PatientMedicationCountAggregateOutputType | null
    _min: PatientMedicationMinAggregateOutputType | null
    _max: PatientMedicationMaxAggregateOutputType | null
  }

  export type PatientMedicationMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    prescribedById: string | null
    prescribedByName: string | null
    name: string | null
    dosage: string | null
    frequency: string | null
    route: string | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    instructions: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientMedicationMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    prescribedById: string | null
    prescribedByName: string | null
    name: string | null
    dosage: string | null
    frequency: string | null
    route: string | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    instructions: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientMedicationCountAggregateOutputType = {
    id: number
    patientId: number
    prescribedById: number
    prescribedByName: number
    name: number
    dosage: number
    frequency: number
    route: number
    startDate: number
    endDate: number
    status: number
    instructions: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientMedicationMinAggregateInputType = {
    id?: true
    patientId?: true
    prescribedById?: true
    prescribedByName?: true
    name?: true
    dosage?: true
    frequency?: true
    route?: true
    startDate?: true
    endDate?: true
    status?: true
    instructions?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientMedicationMaxAggregateInputType = {
    id?: true
    patientId?: true
    prescribedById?: true
    prescribedByName?: true
    name?: true
    dosage?: true
    frequency?: true
    route?: true
    startDate?: true
    endDate?: true
    status?: true
    instructions?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientMedicationCountAggregateInputType = {
    id?: true
    patientId?: true
    prescribedById?: true
    prescribedByName?: true
    name?: true
    dosage?: true
    frequency?: true
    route?: true
    startDate?: true
    endDate?: true
    status?: true
    instructions?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientMedicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientMedication to aggregate.
     */
    where?: PatientMedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientMedications to fetch.
     */
    orderBy?: PatientMedicationOrderByWithRelationInput | PatientMedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientMedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientMedications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientMedications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatientMedications
    **/
    _count?: true | PatientMedicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMedicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMedicationMaxAggregateInputType
  }

  export type GetPatientMedicationAggregateType<T extends PatientMedicationAggregateArgs> = {
        [P in keyof T & keyof AggregatePatientMedication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatientMedication[P]>
      : GetScalarType<T[P], AggregatePatientMedication[P]>
  }




  export type PatientMedicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientMedicationWhereInput
    orderBy?: PatientMedicationOrderByWithAggregationInput | PatientMedicationOrderByWithAggregationInput[]
    by: PatientMedicationScalarFieldEnum[] | PatientMedicationScalarFieldEnum
    having?: PatientMedicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientMedicationCountAggregateInputType | true
    _min?: PatientMedicationMinAggregateInputType
    _max?: PatientMedicationMaxAggregateInputType
  }

  export type PatientMedicationGroupByOutputType = {
    id: string
    patientId: string
    prescribedById: string
    prescribedByName: string
    name: string
    dosage: string
    frequency: string
    route: string
    startDate: Date
    endDate: Date | null
    status: string
    instructions: string | null
    createdAt: Date
    updatedAt: Date
    _count: PatientMedicationCountAggregateOutputType | null
    _min: PatientMedicationMinAggregateOutputType | null
    _max: PatientMedicationMaxAggregateOutputType | null
  }

  type GetPatientMedicationGroupByPayload<T extends PatientMedicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientMedicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientMedicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientMedicationGroupByOutputType[P]>
            : GetScalarType<T[P], PatientMedicationGroupByOutputType[P]>
        }
      >
    >


  export type PatientMedicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    prescribedById?: boolean
    prescribedByName?: boolean
    name?: boolean
    dosage?: boolean
    frequency?: boolean
    route?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    instructions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    prescribedBy?: boolean | DoctorDefaultArgs<ExtArgs>
    prescriptions?: boolean | PatientMedication$prescriptionsArgs<ExtArgs>
    _count?: boolean | PatientMedicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientMedication"]>

  export type PatientMedicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    prescribedById?: boolean
    prescribedByName?: boolean
    name?: boolean
    dosage?: boolean
    frequency?: boolean
    route?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    instructions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    prescribedBy?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientMedication"]>

  export type PatientMedicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    prescribedById?: boolean
    prescribedByName?: boolean
    name?: boolean
    dosage?: boolean
    frequency?: boolean
    route?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    instructions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    prescribedBy?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientMedication"]>

  export type PatientMedicationSelectScalar = {
    id?: boolean
    patientId?: boolean
    prescribedById?: boolean
    prescribedByName?: boolean
    name?: boolean
    dosage?: boolean
    frequency?: boolean
    route?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    instructions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientMedicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "prescribedById" | "prescribedByName" | "name" | "dosage" | "frequency" | "route" | "startDate" | "endDate" | "status" | "instructions" | "createdAt" | "updatedAt", ExtArgs["result"]["patientMedication"]>
  export type PatientMedicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    prescribedBy?: boolean | DoctorDefaultArgs<ExtArgs>
    prescriptions?: boolean | PatientMedication$prescriptionsArgs<ExtArgs>
    _count?: boolean | PatientMedicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientMedicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    prescribedBy?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type PatientMedicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    prescribedBy?: boolean | DoctorDefaultArgs<ExtArgs>
  }

  export type $PatientMedicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatientMedication"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      prescribedBy: Prisma.$DoctorPayload<ExtArgs>
      prescriptions: Prisma.$PrescriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      prescribedById: string
      prescribedByName: string
      name: string
      dosage: string
      frequency: string
      route: string
      startDate: Date
      endDate: Date | null
      status: string
      instructions: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patientMedication"]>
    composites: {}
  }

  type PatientMedicationGetPayload<S extends boolean | null | undefined | PatientMedicationDefaultArgs> = $Result.GetResult<Prisma.$PatientMedicationPayload, S>

  type PatientMedicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientMedicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientMedicationCountAggregateInputType | true
    }

  export interface PatientMedicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatientMedication'], meta: { name: 'PatientMedication' } }
    /**
     * Find zero or one PatientMedication that matches the filter.
     * @param {PatientMedicationFindUniqueArgs} args - Arguments to find a PatientMedication
     * @example
     * // Get one PatientMedication
     * const patientMedication = await prisma.patientMedication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientMedicationFindUniqueArgs>(args: SelectSubset<T, PatientMedicationFindUniqueArgs<ExtArgs>>): Prisma__PatientMedicationClient<$Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PatientMedication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientMedicationFindUniqueOrThrowArgs} args - Arguments to find a PatientMedication
     * @example
     * // Get one PatientMedication
     * const patientMedication = await prisma.patientMedication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientMedicationFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientMedicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientMedicationClient<$Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientMedication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientMedicationFindFirstArgs} args - Arguments to find a PatientMedication
     * @example
     * // Get one PatientMedication
     * const patientMedication = await prisma.patientMedication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientMedicationFindFirstArgs>(args?: SelectSubset<T, PatientMedicationFindFirstArgs<ExtArgs>>): Prisma__PatientMedicationClient<$Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientMedication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientMedicationFindFirstOrThrowArgs} args - Arguments to find a PatientMedication
     * @example
     * // Get one PatientMedication
     * const patientMedication = await prisma.patientMedication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientMedicationFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientMedicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientMedicationClient<$Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PatientMedications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientMedicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatientMedications
     * const patientMedications = await prisma.patientMedication.findMany()
     * 
     * // Get first 10 PatientMedications
     * const patientMedications = await prisma.patientMedication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientMedicationWithIdOnly = await prisma.patientMedication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientMedicationFindManyArgs>(args?: SelectSubset<T, PatientMedicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PatientMedication.
     * @param {PatientMedicationCreateArgs} args - Arguments to create a PatientMedication.
     * @example
     * // Create one PatientMedication
     * const PatientMedication = await prisma.patientMedication.create({
     *   data: {
     *     // ... data to create a PatientMedication
     *   }
     * })
     * 
     */
    create<T extends PatientMedicationCreateArgs>(args: SelectSubset<T, PatientMedicationCreateArgs<ExtArgs>>): Prisma__PatientMedicationClient<$Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PatientMedications.
     * @param {PatientMedicationCreateManyArgs} args - Arguments to create many PatientMedications.
     * @example
     * // Create many PatientMedications
     * const patientMedication = await prisma.patientMedication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientMedicationCreateManyArgs>(args?: SelectSubset<T, PatientMedicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PatientMedications and returns the data saved in the database.
     * @param {PatientMedicationCreateManyAndReturnArgs} args - Arguments to create many PatientMedications.
     * @example
     * // Create many PatientMedications
     * const patientMedication = await prisma.patientMedication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PatientMedications and only return the `id`
     * const patientMedicationWithIdOnly = await prisma.patientMedication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientMedicationCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientMedicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PatientMedication.
     * @param {PatientMedicationDeleteArgs} args - Arguments to delete one PatientMedication.
     * @example
     * // Delete one PatientMedication
     * const PatientMedication = await prisma.patientMedication.delete({
     *   where: {
     *     // ... filter to delete one PatientMedication
     *   }
     * })
     * 
     */
    delete<T extends PatientMedicationDeleteArgs>(args: SelectSubset<T, PatientMedicationDeleteArgs<ExtArgs>>): Prisma__PatientMedicationClient<$Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PatientMedication.
     * @param {PatientMedicationUpdateArgs} args - Arguments to update one PatientMedication.
     * @example
     * // Update one PatientMedication
     * const patientMedication = await prisma.patientMedication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientMedicationUpdateArgs>(args: SelectSubset<T, PatientMedicationUpdateArgs<ExtArgs>>): Prisma__PatientMedicationClient<$Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PatientMedications.
     * @param {PatientMedicationDeleteManyArgs} args - Arguments to filter PatientMedications to delete.
     * @example
     * // Delete a few PatientMedications
     * const { count } = await prisma.patientMedication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientMedicationDeleteManyArgs>(args?: SelectSubset<T, PatientMedicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientMedications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientMedicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatientMedications
     * const patientMedication = await prisma.patientMedication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientMedicationUpdateManyArgs>(args: SelectSubset<T, PatientMedicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientMedications and returns the data updated in the database.
     * @param {PatientMedicationUpdateManyAndReturnArgs} args - Arguments to update many PatientMedications.
     * @example
     * // Update many PatientMedications
     * const patientMedication = await prisma.patientMedication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PatientMedications and only return the `id`
     * const patientMedicationWithIdOnly = await prisma.patientMedication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientMedicationUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientMedicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PatientMedication.
     * @param {PatientMedicationUpsertArgs} args - Arguments to update or create a PatientMedication.
     * @example
     * // Update or create a PatientMedication
     * const patientMedication = await prisma.patientMedication.upsert({
     *   create: {
     *     // ... data to create a PatientMedication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatientMedication we want to update
     *   }
     * })
     */
    upsert<T extends PatientMedicationUpsertArgs>(args: SelectSubset<T, PatientMedicationUpsertArgs<ExtArgs>>): Prisma__PatientMedicationClient<$Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PatientMedications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientMedicationCountArgs} args - Arguments to filter PatientMedications to count.
     * @example
     * // Count the number of PatientMedications
     * const count = await prisma.patientMedication.count({
     *   where: {
     *     // ... the filter for the PatientMedications we want to count
     *   }
     * })
    **/
    count<T extends PatientMedicationCountArgs>(
      args?: Subset<T, PatientMedicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientMedicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatientMedication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientMedicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientMedicationAggregateArgs>(args: Subset<T, PatientMedicationAggregateArgs>): Prisma.PrismaPromise<GetPatientMedicationAggregateType<T>>

    /**
     * Group by PatientMedication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientMedicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientMedicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientMedicationGroupByArgs['orderBy'] }
        : { orderBy?: PatientMedicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientMedicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientMedicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatientMedication model
   */
  readonly fields: PatientMedicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatientMedication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientMedicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prescribedBy<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prescriptions<T extends PatientMedication$prescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, PatientMedication$prescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PatientMedication model
   */
  interface PatientMedicationFieldRefs {
    readonly id: FieldRef<"PatientMedication", 'String'>
    readonly patientId: FieldRef<"PatientMedication", 'String'>
    readonly prescribedById: FieldRef<"PatientMedication", 'String'>
    readonly prescribedByName: FieldRef<"PatientMedication", 'String'>
    readonly name: FieldRef<"PatientMedication", 'String'>
    readonly dosage: FieldRef<"PatientMedication", 'String'>
    readonly frequency: FieldRef<"PatientMedication", 'String'>
    readonly route: FieldRef<"PatientMedication", 'String'>
    readonly startDate: FieldRef<"PatientMedication", 'DateTime'>
    readonly endDate: FieldRef<"PatientMedication", 'DateTime'>
    readonly status: FieldRef<"PatientMedication", 'String'>
    readonly instructions: FieldRef<"PatientMedication", 'String'>
    readonly createdAt: FieldRef<"PatientMedication", 'DateTime'>
    readonly updatedAt: FieldRef<"PatientMedication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PatientMedication findUnique
   */
  export type PatientMedicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedication
     */
    select?: PatientMedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedication
     */
    omit?: PatientMedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationInclude<ExtArgs> | null
    /**
     * Filter, which PatientMedication to fetch.
     */
    where: PatientMedicationWhereUniqueInput
  }

  /**
   * PatientMedication findUniqueOrThrow
   */
  export type PatientMedicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedication
     */
    select?: PatientMedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedication
     */
    omit?: PatientMedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationInclude<ExtArgs> | null
    /**
     * Filter, which PatientMedication to fetch.
     */
    where: PatientMedicationWhereUniqueInput
  }

  /**
   * PatientMedication findFirst
   */
  export type PatientMedicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedication
     */
    select?: PatientMedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedication
     */
    omit?: PatientMedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationInclude<ExtArgs> | null
    /**
     * Filter, which PatientMedication to fetch.
     */
    where?: PatientMedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientMedications to fetch.
     */
    orderBy?: PatientMedicationOrderByWithRelationInput | PatientMedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientMedications.
     */
    cursor?: PatientMedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientMedications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientMedications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientMedications.
     */
    distinct?: PatientMedicationScalarFieldEnum | PatientMedicationScalarFieldEnum[]
  }

  /**
   * PatientMedication findFirstOrThrow
   */
  export type PatientMedicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedication
     */
    select?: PatientMedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedication
     */
    omit?: PatientMedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationInclude<ExtArgs> | null
    /**
     * Filter, which PatientMedication to fetch.
     */
    where?: PatientMedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientMedications to fetch.
     */
    orderBy?: PatientMedicationOrderByWithRelationInput | PatientMedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientMedications.
     */
    cursor?: PatientMedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientMedications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientMedications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientMedications.
     */
    distinct?: PatientMedicationScalarFieldEnum | PatientMedicationScalarFieldEnum[]
  }

  /**
   * PatientMedication findMany
   */
  export type PatientMedicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedication
     */
    select?: PatientMedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedication
     */
    omit?: PatientMedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationInclude<ExtArgs> | null
    /**
     * Filter, which PatientMedications to fetch.
     */
    where?: PatientMedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientMedications to fetch.
     */
    orderBy?: PatientMedicationOrderByWithRelationInput | PatientMedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatientMedications.
     */
    cursor?: PatientMedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientMedications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientMedications.
     */
    skip?: number
    distinct?: PatientMedicationScalarFieldEnum | PatientMedicationScalarFieldEnum[]
  }

  /**
   * PatientMedication create
   */
  export type PatientMedicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedication
     */
    select?: PatientMedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedication
     */
    omit?: PatientMedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationInclude<ExtArgs> | null
    /**
     * The data needed to create a PatientMedication.
     */
    data: XOR<PatientMedicationCreateInput, PatientMedicationUncheckedCreateInput>
  }

  /**
   * PatientMedication createMany
   */
  export type PatientMedicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatientMedications.
     */
    data: PatientMedicationCreateManyInput | PatientMedicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PatientMedication createManyAndReturn
   */
  export type PatientMedicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedication
     */
    select?: PatientMedicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedication
     */
    omit?: PatientMedicationOmit<ExtArgs> | null
    /**
     * The data used to create many PatientMedications.
     */
    data: PatientMedicationCreateManyInput | PatientMedicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientMedication update
   */
  export type PatientMedicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedication
     */
    select?: PatientMedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedication
     */
    omit?: PatientMedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationInclude<ExtArgs> | null
    /**
     * The data needed to update a PatientMedication.
     */
    data: XOR<PatientMedicationUpdateInput, PatientMedicationUncheckedUpdateInput>
    /**
     * Choose, which PatientMedication to update.
     */
    where: PatientMedicationWhereUniqueInput
  }

  /**
   * PatientMedication updateMany
   */
  export type PatientMedicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatientMedications.
     */
    data: XOR<PatientMedicationUpdateManyMutationInput, PatientMedicationUncheckedUpdateManyInput>
    /**
     * Filter which PatientMedications to update
     */
    where?: PatientMedicationWhereInput
    /**
     * Limit how many PatientMedications to update.
     */
    limit?: number
  }

  /**
   * PatientMedication updateManyAndReturn
   */
  export type PatientMedicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedication
     */
    select?: PatientMedicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedication
     */
    omit?: PatientMedicationOmit<ExtArgs> | null
    /**
     * The data used to update PatientMedications.
     */
    data: XOR<PatientMedicationUpdateManyMutationInput, PatientMedicationUncheckedUpdateManyInput>
    /**
     * Filter which PatientMedications to update
     */
    where?: PatientMedicationWhereInput
    /**
     * Limit how many PatientMedications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientMedication upsert
   */
  export type PatientMedicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedication
     */
    select?: PatientMedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedication
     */
    omit?: PatientMedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationInclude<ExtArgs> | null
    /**
     * The filter to search for the PatientMedication to update in case it exists.
     */
    where: PatientMedicationWhereUniqueInput
    /**
     * In case the PatientMedication found by the `where` argument doesn't exist, create a new PatientMedication with this data.
     */
    create: XOR<PatientMedicationCreateInput, PatientMedicationUncheckedCreateInput>
    /**
     * In case the PatientMedication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientMedicationUpdateInput, PatientMedicationUncheckedUpdateInput>
  }

  /**
   * PatientMedication delete
   */
  export type PatientMedicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedication
     */
    select?: PatientMedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedication
     */
    omit?: PatientMedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationInclude<ExtArgs> | null
    /**
     * Filter which PatientMedication to delete.
     */
    where: PatientMedicationWhereUniqueInput
  }

  /**
   * PatientMedication deleteMany
   */
  export type PatientMedicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientMedications to delete
     */
    where?: PatientMedicationWhereInput
    /**
     * Limit how many PatientMedications to delete.
     */
    limit?: number
  }

  /**
   * PatientMedication.prescriptions
   */
  export type PatientMedication$prescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * PatientMedication without action
   */
  export type PatientMedicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientMedication
     */
    select?: PatientMedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientMedication
     */
    omit?: PatientMedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientMedicationInclude<ExtArgs> | null
  }


  /**
   * Model LabTest
   */

  export type AggregateLabTest = {
    _count: LabTestCountAggregateOutputType | null
    _min: LabTestMinAggregateOutputType | null
    _max: LabTestMaxAggregateOutputType | null
  }

  export type LabTestMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    doctorId: string | null
    testType: string | null
    status: $Enums.LabStatus | null
    requestedAt: Date | null
    acceptedAt: Date | null
    result: string | null
    validatedAt: Date | null
    releasedAt: Date | null
    medicalRecordId: string | null
  }

  export type LabTestMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    doctorId: string | null
    testType: string | null
    status: $Enums.LabStatus | null
    requestedAt: Date | null
    acceptedAt: Date | null
    result: string | null
    validatedAt: Date | null
    releasedAt: Date | null
    medicalRecordId: string | null
  }

  export type LabTestCountAggregateOutputType = {
    id: number
    patientId: number
    doctorId: number
    testType: number
    status: number
    requestedAt: number
    acceptedAt: number
    result: number
    validatedAt: number
    releasedAt: number
    medicalRecordId: number
    _all: number
  }


  export type LabTestMinAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    testType?: true
    status?: true
    requestedAt?: true
    acceptedAt?: true
    result?: true
    validatedAt?: true
    releasedAt?: true
    medicalRecordId?: true
  }

  export type LabTestMaxAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    testType?: true
    status?: true
    requestedAt?: true
    acceptedAt?: true
    result?: true
    validatedAt?: true
    releasedAt?: true
    medicalRecordId?: true
  }

  export type LabTestCountAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    testType?: true
    status?: true
    requestedAt?: true
    acceptedAt?: true
    result?: true
    validatedAt?: true
    releasedAt?: true
    medicalRecordId?: true
    _all?: true
  }

  export type LabTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabTest to aggregate.
     */
    where?: LabTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabTests to fetch.
     */
    orderBy?: LabTestOrderByWithRelationInput | LabTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LabTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LabTests
    **/
    _count?: true | LabTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabTestMaxAggregateInputType
  }

  export type GetLabTestAggregateType<T extends LabTestAggregateArgs> = {
        [P in keyof T & keyof AggregateLabTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLabTest[P]>
      : GetScalarType<T[P], AggregateLabTest[P]>
  }




  export type LabTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabTestWhereInput
    orderBy?: LabTestOrderByWithAggregationInput | LabTestOrderByWithAggregationInput[]
    by: LabTestScalarFieldEnum[] | LabTestScalarFieldEnum
    having?: LabTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabTestCountAggregateInputType | true
    _min?: LabTestMinAggregateInputType
    _max?: LabTestMaxAggregateInputType
  }

  export type LabTestGroupByOutputType = {
    id: string
    patientId: string
    doctorId: string
    testType: string
    status: $Enums.LabStatus
    requestedAt: Date
    acceptedAt: Date | null
    result: string | null
    validatedAt: Date | null
    releasedAt: Date | null
    medicalRecordId: string
    _count: LabTestCountAggregateOutputType | null
    _min: LabTestMinAggregateOutputType | null
    _max: LabTestMaxAggregateOutputType | null
  }

  type GetLabTestGroupByPayload<T extends LabTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LabTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabTestGroupByOutputType[P]>
            : GetScalarType<T[P], LabTestGroupByOutputType[P]>
        }
      >
    >


  export type LabTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    testType?: boolean
    status?: boolean
    requestedAt?: boolean
    acceptedAt?: boolean
    result?: boolean
    validatedAt?: boolean
    releasedAt?: boolean
    medicalRecordId?: boolean
    medicalRecord?: boolean | MedicalRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labTest"]>

  export type LabTestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    testType?: boolean
    status?: boolean
    requestedAt?: boolean
    acceptedAt?: boolean
    result?: boolean
    validatedAt?: boolean
    releasedAt?: boolean
    medicalRecordId?: boolean
    medicalRecord?: boolean | MedicalRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labTest"]>

  export type LabTestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    testType?: boolean
    status?: boolean
    requestedAt?: boolean
    acceptedAt?: boolean
    result?: boolean
    validatedAt?: boolean
    releasedAt?: boolean
    medicalRecordId?: boolean
    medicalRecord?: boolean | MedicalRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labTest"]>

  export type LabTestSelectScalar = {
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    testType?: boolean
    status?: boolean
    requestedAt?: boolean
    acceptedAt?: boolean
    result?: boolean
    validatedAt?: boolean
    releasedAt?: boolean
    medicalRecordId?: boolean
  }

  export type LabTestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "doctorId" | "testType" | "status" | "requestedAt" | "acceptedAt" | "result" | "validatedAt" | "releasedAt" | "medicalRecordId", ExtArgs["result"]["labTest"]>
  export type LabTestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicalRecord?: boolean | MedicalRecordDefaultArgs<ExtArgs>
  }
  export type LabTestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicalRecord?: boolean | MedicalRecordDefaultArgs<ExtArgs>
  }
  export type LabTestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicalRecord?: boolean | MedicalRecordDefaultArgs<ExtArgs>
  }

  export type $LabTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LabTest"
    objects: {
      medicalRecord: Prisma.$MedicalRecordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      doctorId: string
      testType: string
      status: $Enums.LabStatus
      requestedAt: Date
      acceptedAt: Date | null
      result: string | null
      validatedAt: Date | null
      releasedAt: Date | null
      medicalRecordId: string
    }, ExtArgs["result"]["labTest"]>
    composites: {}
  }

  type LabTestGetPayload<S extends boolean | null | undefined | LabTestDefaultArgs> = $Result.GetResult<Prisma.$LabTestPayload, S>

  type LabTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LabTestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LabTestCountAggregateInputType | true
    }

  export interface LabTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LabTest'], meta: { name: 'LabTest' } }
    /**
     * Find zero or one LabTest that matches the filter.
     * @param {LabTestFindUniqueArgs} args - Arguments to find a LabTest
     * @example
     * // Get one LabTest
     * const labTest = await prisma.labTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabTestFindUniqueArgs>(args: SelectSubset<T, LabTestFindUniqueArgs<ExtArgs>>): Prisma__LabTestClient<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LabTest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabTestFindUniqueOrThrowArgs} args - Arguments to find a LabTest
     * @example
     * // Get one LabTest
     * const labTest = await prisma.labTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabTestFindUniqueOrThrowArgs>(args: SelectSubset<T, LabTestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LabTestClient<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabTestFindFirstArgs} args - Arguments to find a LabTest
     * @example
     * // Get one LabTest
     * const labTest = await prisma.labTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabTestFindFirstArgs>(args?: SelectSubset<T, LabTestFindFirstArgs<ExtArgs>>): Prisma__LabTestClient<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabTestFindFirstOrThrowArgs} args - Arguments to find a LabTest
     * @example
     * // Get one LabTest
     * const labTest = await prisma.labTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabTestFindFirstOrThrowArgs>(args?: SelectSubset<T, LabTestFindFirstOrThrowArgs<ExtArgs>>): Prisma__LabTestClient<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LabTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabTestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LabTests
     * const labTests = await prisma.labTest.findMany()
     * 
     * // Get first 10 LabTests
     * const labTests = await prisma.labTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const labTestWithIdOnly = await prisma.labTest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LabTestFindManyArgs>(args?: SelectSubset<T, LabTestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LabTest.
     * @param {LabTestCreateArgs} args - Arguments to create a LabTest.
     * @example
     * // Create one LabTest
     * const LabTest = await prisma.labTest.create({
     *   data: {
     *     // ... data to create a LabTest
     *   }
     * })
     * 
     */
    create<T extends LabTestCreateArgs>(args: SelectSubset<T, LabTestCreateArgs<ExtArgs>>): Prisma__LabTestClient<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LabTests.
     * @param {LabTestCreateManyArgs} args - Arguments to create many LabTests.
     * @example
     * // Create many LabTests
     * const labTest = await prisma.labTest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LabTestCreateManyArgs>(args?: SelectSubset<T, LabTestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LabTests and returns the data saved in the database.
     * @param {LabTestCreateManyAndReturnArgs} args - Arguments to create many LabTests.
     * @example
     * // Create many LabTests
     * const labTest = await prisma.labTest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LabTests and only return the `id`
     * const labTestWithIdOnly = await prisma.labTest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LabTestCreateManyAndReturnArgs>(args?: SelectSubset<T, LabTestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LabTest.
     * @param {LabTestDeleteArgs} args - Arguments to delete one LabTest.
     * @example
     * // Delete one LabTest
     * const LabTest = await prisma.labTest.delete({
     *   where: {
     *     // ... filter to delete one LabTest
     *   }
     * })
     * 
     */
    delete<T extends LabTestDeleteArgs>(args: SelectSubset<T, LabTestDeleteArgs<ExtArgs>>): Prisma__LabTestClient<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LabTest.
     * @param {LabTestUpdateArgs} args - Arguments to update one LabTest.
     * @example
     * // Update one LabTest
     * const labTest = await prisma.labTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LabTestUpdateArgs>(args: SelectSubset<T, LabTestUpdateArgs<ExtArgs>>): Prisma__LabTestClient<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LabTests.
     * @param {LabTestDeleteManyArgs} args - Arguments to filter LabTests to delete.
     * @example
     * // Delete a few LabTests
     * const { count } = await prisma.labTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LabTestDeleteManyArgs>(args?: SelectSubset<T, LabTestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LabTests
     * const labTest = await prisma.labTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LabTestUpdateManyArgs>(args: SelectSubset<T, LabTestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabTests and returns the data updated in the database.
     * @param {LabTestUpdateManyAndReturnArgs} args - Arguments to update many LabTests.
     * @example
     * // Update many LabTests
     * const labTest = await prisma.labTest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LabTests and only return the `id`
     * const labTestWithIdOnly = await prisma.labTest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LabTestUpdateManyAndReturnArgs>(args: SelectSubset<T, LabTestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LabTest.
     * @param {LabTestUpsertArgs} args - Arguments to update or create a LabTest.
     * @example
     * // Update or create a LabTest
     * const labTest = await prisma.labTest.upsert({
     *   create: {
     *     // ... data to create a LabTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LabTest we want to update
     *   }
     * })
     */
    upsert<T extends LabTestUpsertArgs>(args: SelectSubset<T, LabTestUpsertArgs<ExtArgs>>): Prisma__LabTestClient<$Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LabTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabTestCountArgs} args - Arguments to filter LabTests to count.
     * @example
     * // Count the number of LabTests
     * const count = await prisma.labTest.count({
     *   where: {
     *     // ... the filter for the LabTests we want to count
     *   }
     * })
    **/
    count<T extends LabTestCountArgs>(
      args?: Subset<T, LabTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LabTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LabTestAggregateArgs>(args: Subset<T, LabTestAggregateArgs>): Prisma.PrismaPromise<GetLabTestAggregateType<T>>

    /**
     * Group by LabTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabTestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LabTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabTestGroupByArgs['orderBy'] }
        : { orderBy?: LabTestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LabTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LabTest model
   */
  readonly fields: LabTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LabTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LabTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicalRecord<T extends MedicalRecordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicalRecordDefaultArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LabTest model
   */
  interface LabTestFieldRefs {
    readonly id: FieldRef<"LabTest", 'String'>
    readonly patientId: FieldRef<"LabTest", 'String'>
    readonly doctorId: FieldRef<"LabTest", 'String'>
    readonly testType: FieldRef<"LabTest", 'String'>
    readonly status: FieldRef<"LabTest", 'LabStatus'>
    readonly requestedAt: FieldRef<"LabTest", 'DateTime'>
    readonly acceptedAt: FieldRef<"LabTest", 'DateTime'>
    readonly result: FieldRef<"LabTest", 'String'>
    readonly validatedAt: FieldRef<"LabTest", 'DateTime'>
    readonly releasedAt: FieldRef<"LabTest", 'DateTime'>
    readonly medicalRecordId: FieldRef<"LabTest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LabTest findUnique
   */
  export type LabTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * Filter, which LabTest to fetch.
     */
    where: LabTestWhereUniqueInput
  }

  /**
   * LabTest findUniqueOrThrow
   */
  export type LabTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * Filter, which LabTest to fetch.
     */
    where: LabTestWhereUniqueInput
  }

  /**
   * LabTest findFirst
   */
  export type LabTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * Filter, which LabTest to fetch.
     */
    where?: LabTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabTests to fetch.
     */
    orderBy?: LabTestOrderByWithRelationInput | LabTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabTests.
     */
    cursor?: LabTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabTests.
     */
    distinct?: LabTestScalarFieldEnum | LabTestScalarFieldEnum[]
  }

  /**
   * LabTest findFirstOrThrow
   */
  export type LabTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * Filter, which LabTest to fetch.
     */
    where?: LabTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabTests to fetch.
     */
    orderBy?: LabTestOrderByWithRelationInput | LabTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabTests.
     */
    cursor?: LabTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabTests.
     */
    distinct?: LabTestScalarFieldEnum | LabTestScalarFieldEnum[]
  }

  /**
   * LabTest findMany
   */
  export type LabTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * Filter, which LabTests to fetch.
     */
    where?: LabTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabTests to fetch.
     */
    orderBy?: LabTestOrderByWithRelationInput | LabTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LabTests.
     */
    cursor?: LabTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabTests.
     */
    skip?: number
    distinct?: LabTestScalarFieldEnum | LabTestScalarFieldEnum[]
  }

  /**
   * LabTest create
   */
  export type LabTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * The data needed to create a LabTest.
     */
    data: XOR<LabTestCreateInput, LabTestUncheckedCreateInput>
  }

  /**
   * LabTest createMany
   */
  export type LabTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LabTests.
     */
    data: LabTestCreateManyInput | LabTestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LabTest createManyAndReturn
   */
  export type LabTestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * The data used to create many LabTests.
     */
    data: LabTestCreateManyInput | LabTestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabTest update
   */
  export type LabTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * The data needed to update a LabTest.
     */
    data: XOR<LabTestUpdateInput, LabTestUncheckedUpdateInput>
    /**
     * Choose, which LabTest to update.
     */
    where: LabTestWhereUniqueInput
  }

  /**
   * LabTest updateMany
   */
  export type LabTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LabTests.
     */
    data: XOR<LabTestUpdateManyMutationInput, LabTestUncheckedUpdateManyInput>
    /**
     * Filter which LabTests to update
     */
    where?: LabTestWhereInput
    /**
     * Limit how many LabTests to update.
     */
    limit?: number
  }

  /**
   * LabTest updateManyAndReturn
   */
  export type LabTestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * The data used to update LabTests.
     */
    data: XOR<LabTestUpdateManyMutationInput, LabTestUncheckedUpdateManyInput>
    /**
     * Filter which LabTests to update
     */
    where?: LabTestWhereInput
    /**
     * Limit how many LabTests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabTest upsert
   */
  export type LabTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * The filter to search for the LabTest to update in case it exists.
     */
    where: LabTestWhereUniqueInput
    /**
     * In case the LabTest found by the `where` argument doesn't exist, create a new LabTest with this data.
     */
    create: XOR<LabTestCreateInput, LabTestUncheckedCreateInput>
    /**
     * In case the LabTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LabTestUpdateInput, LabTestUncheckedUpdateInput>
  }

  /**
   * LabTest delete
   */
  export type LabTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
    /**
     * Filter which LabTest to delete.
     */
    where: LabTestWhereUniqueInput
  }

  /**
   * LabTest deleteMany
   */
  export type LabTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabTests to delete
     */
    where?: LabTestWhereInput
    /**
     * Limit how many LabTests to delete.
     */
    limit?: number
  }

  /**
   * LabTest without action
   */
  export type LabTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabTest
     */
    select?: LabTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabTest
     */
    omit?: LabTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabTestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    userId: 'userId',
    fullName: 'fullName',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    phone: 'phone',
    address: 'address',
    emergencyContact: 'emergencyContact',
    insuranceDetails: 'insuranceDetails',
    doctorId: 'doctorId'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    userId: 'userId',
    specialization: 'specialization'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const NurseScalarFieldEnum: {
    userId: 'userId',
    shift: 'shift',
    department: 'department'
  };

  export type NurseScalarFieldEnum = (typeof NurseScalarFieldEnum)[keyof typeof NurseScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    userId: 'userId',
    permissions: 'permissions'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const MedicalRecordScalarFieldEnum: {
    id: 'id',
    diagnosis: 'diagnosis',
    notes: 'notes',
    createdAt: 'createdAt',
    patientId: 'patientId',
    doctorId: 'doctorId'
  };

  export type MedicalRecordScalarFieldEnum = (typeof MedicalRecordScalarFieldEnum)[keyof typeof MedicalRecordScalarFieldEnum]


  export const MedicationInventoryScalarFieldEnum: {
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

  export type MedicationInventoryScalarFieldEnum = (typeof MedicationInventoryScalarFieldEnum)[keyof typeof MedicationInventoryScalarFieldEnum]


  export const PrescriptionScalarFieldEnum: {
    id: 'id',
    patientMedicationId: 'patientMedicationId',
    medicationInventoryId: 'medicationInventoryId',
    createdAt: 'createdAt',
    medicalRecordId: 'medicalRecordId'
  };

  export type PrescriptionScalarFieldEnum = (typeof PrescriptionScalarFieldEnum)[keyof typeof PrescriptionScalarFieldEnum]


  export const PatientMedicationScalarFieldEnum: {
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
    updatedAt: 'updatedAt'
  };

  export type PatientMedicationScalarFieldEnum = (typeof PatientMedicationScalarFieldEnum)[keyof typeof PatientMedicationScalarFieldEnum]


  export const LabTestScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    doctorId: 'doctorId',
    testType: 'testType',
    status: 'status',
    requestedAt: 'requestedAt',
    acceptedAt: 'acceptedAt',
    result: 'result',
    validatedAt: 'validatedAt',
    releasedAt: 'releasedAt',
    medicalRecordId: 'medicalRecordId'
  };

  export type LabTestScalarFieldEnum = (typeof LabTestScalarFieldEnum)[keyof typeof LabTestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'MedicationStatus'
   */
  export type EnumMedicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MedicationStatus'>
    


  /**
   * Reference to a field of type 'MedicationStatus[]'
   */
  export type ListEnumMedicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MedicationStatus[]'>
    


  /**
   * Reference to a field of type 'LabStatus'
   */
  export type EnumLabStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LabStatus'>
    


  /**
   * Reference to a field of type 'LabStatus[]'
   */
  export type ListEnumLabStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LabStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    patients?: PatientListRelationFilter
    patientProfile?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
    doctor?: XOR<DoctorNullableScalarRelationFilter, DoctorWhereInput> | null
    nurse?: XOR<NurseNullableScalarRelationFilter, NurseWhereInput> | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    patients?: PatientOrderByRelationAggregateInput
    patientProfile?: PatientOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
    nurse?: NurseOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    patients?: PatientListRelationFilter
    patientProfile?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
    doctor?: XOR<DoctorNullableScalarRelationFilter, DoctorWhereInput> | null
    nurse?: XOR<NurseNullableScalarRelationFilter, NurseWhereInput> | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    userId?: StringFilter<"Patient"> | string
    fullName?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeFilter<"Patient"> | Date | string
    gender?: StringFilter<"Patient"> | string
    phone?: StringFilter<"Patient"> | string
    address?: StringFilter<"Patient"> | string
    emergencyContact?: StringFilter<"Patient"> | string
    insuranceDetails?: StringNullableFilter<"Patient"> | string | null
    doctorId?: StringFilter<"Patient"> | string
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    records?: MedicalRecordListRelationFilter
    patientMedication?: PatientMedicationListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    userId?: SortOrder
    fullName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    emergencyContact?: SortOrder
    insuranceDetails?: SortOrderInput | SortOrder
    doctorId?: SortOrder
    doctor?: UserOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    records?: MedicalRecordOrderByRelationAggregateInput
    patientMedication?: PatientMedicationOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    fullName?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeFilter<"Patient"> | Date | string
    gender?: StringFilter<"Patient"> | string
    phone?: StringFilter<"Patient"> | string
    address?: StringFilter<"Patient"> | string
    emergencyContact?: StringFilter<"Patient"> | string
    insuranceDetails?: StringNullableFilter<"Patient"> | string | null
    doctorId?: StringFilter<"Patient"> | string
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    records?: MedicalRecordListRelationFilter
    patientMedication?: PatientMedicationListRelationFilter
  }, "userId">

  export type PatientOrderByWithAggregationInput = {
    userId?: SortOrder
    fullName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    emergencyContact?: SortOrder
    insuranceDetails?: SortOrderInput | SortOrder
    doctorId?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Patient"> | string
    fullName?: StringWithAggregatesFilter<"Patient"> | string
    dateOfBirth?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    gender?: StringWithAggregatesFilter<"Patient"> | string
    phone?: StringWithAggregatesFilter<"Patient"> | string
    address?: StringWithAggregatesFilter<"Patient"> | string
    emergencyContact?: StringWithAggregatesFilter<"Patient"> | string
    insuranceDetails?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    doctorId?: StringWithAggregatesFilter<"Patient"> | string
  }

  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    userId?: StringFilter<"Doctor"> | string
    specialization?: StringFilter<"Doctor"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    patientMedication?: PatientMedicationListRelationFilter
    medicalRecords?: MedicalRecordListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    userId?: SortOrder
    specialization?: SortOrder
    user?: UserOrderByWithRelationInput
    patientMedication?: PatientMedicationOrderByRelationAggregateInput
    medicalRecords?: MedicalRecordOrderByRelationAggregateInput
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    specialization?: StringFilter<"Doctor"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    patientMedication?: PatientMedicationListRelationFilter
    medicalRecords?: MedicalRecordListRelationFilter
  }, "userId">

  export type DoctorOrderByWithAggregationInput = {
    userId?: SortOrder
    specialization?: SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    OR?: DoctorScalarWhereWithAggregatesInput[]
    NOT?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Doctor"> | string
    specialization?: StringWithAggregatesFilter<"Doctor"> | string
  }

  export type NurseWhereInput = {
    AND?: NurseWhereInput | NurseWhereInput[]
    OR?: NurseWhereInput[]
    NOT?: NurseWhereInput | NurseWhereInput[]
    userId?: StringFilter<"Nurse"> | string
    shift?: StringFilter<"Nurse"> | string
    department?: StringFilter<"Nurse"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NurseOrderByWithRelationInput = {
    userId?: SortOrder
    shift?: SortOrder
    department?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NurseWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: NurseWhereInput | NurseWhereInput[]
    OR?: NurseWhereInput[]
    NOT?: NurseWhereInput | NurseWhereInput[]
    shift?: StringFilter<"Nurse"> | string
    department?: StringFilter<"Nurse"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId">

  export type NurseOrderByWithAggregationInput = {
    userId?: SortOrder
    shift?: SortOrder
    department?: SortOrder
    _count?: NurseCountOrderByAggregateInput
    _max?: NurseMaxOrderByAggregateInput
    _min?: NurseMinOrderByAggregateInput
  }

  export type NurseScalarWhereWithAggregatesInput = {
    AND?: NurseScalarWhereWithAggregatesInput | NurseScalarWhereWithAggregatesInput[]
    OR?: NurseScalarWhereWithAggregatesInput[]
    NOT?: NurseScalarWhereWithAggregatesInput | NurseScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Nurse"> | string
    shift?: StringWithAggregatesFilter<"Nurse"> | string
    department?: StringWithAggregatesFilter<"Nurse"> | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    userId?: StringFilter<"Admin"> | string
    permissions?: StringFilter<"Admin"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    userId?: SortOrder
    permissions?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    permissions?: StringFilter<"Admin"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId">

  export type AdminOrderByWithAggregationInput = {
    userId?: SortOrder
    permissions?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Admin"> | string
    permissions?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type MedicalRecordWhereInput = {
    AND?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    OR?: MedicalRecordWhereInput[]
    NOT?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    id?: StringFilter<"MedicalRecord"> | string
    diagnosis?: StringFilter<"MedicalRecord"> | string
    notes?: StringNullableFilter<"MedicalRecord"> | string | null
    createdAt?: DateTimeFilter<"MedicalRecord"> | Date | string
    patientId?: StringFilter<"MedicalRecord"> | string
    doctorId?: StringFilter<"MedicalRecord"> | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    prescriptions?: PrescriptionListRelationFilter
    labTests?: LabTestListRelationFilter
  }

  export type MedicalRecordOrderByWithRelationInput = {
    id?: SortOrder
    diagnosis?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    patient?: PatientOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
    prescriptions?: PrescriptionOrderByRelationAggregateInput
    labTests?: LabTestOrderByRelationAggregateInput
  }

  export type MedicalRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    OR?: MedicalRecordWhereInput[]
    NOT?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    diagnosis?: StringFilter<"MedicalRecord"> | string
    notes?: StringNullableFilter<"MedicalRecord"> | string | null
    createdAt?: DateTimeFilter<"MedicalRecord"> | Date | string
    patientId?: StringFilter<"MedicalRecord"> | string
    doctorId?: StringFilter<"MedicalRecord"> | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    prescriptions?: PrescriptionListRelationFilter
    labTests?: LabTestListRelationFilter
  }, "id">

  export type MedicalRecordOrderByWithAggregationInput = {
    id?: SortOrder
    diagnosis?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    _count?: MedicalRecordCountOrderByAggregateInput
    _max?: MedicalRecordMaxOrderByAggregateInput
    _min?: MedicalRecordMinOrderByAggregateInput
  }

  export type MedicalRecordScalarWhereWithAggregatesInput = {
    AND?: MedicalRecordScalarWhereWithAggregatesInput | MedicalRecordScalarWhereWithAggregatesInput[]
    OR?: MedicalRecordScalarWhereWithAggregatesInput[]
    NOT?: MedicalRecordScalarWhereWithAggregatesInput | MedicalRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicalRecord"> | string
    diagnosis?: StringWithAggregatesFilter<"MedicalRecord"> | string
    notes?: StringNullableWithAggregatesFilter<"MedicalRecord"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MedicalRecord"> | Date | string
    patientId?: StringWithAggregatesFilter<"MedicalRecord"> | string
    doctorId?: StringWithAggregatesFilter<"MedicalRecord"> | string
  }

  export type MedicationInventoryWhereInput = {
    AND?: MedicationInventoryWhereInput | MedicationInventoryWhereInput[]
    OR?: MedicationInventoryWhereInput[]
    NOT?: MedicationInventoryWhereInput | MedicationInventoryWhereInput[]
    id?: StringFilter<"MedicationInventory"> | string
    name?: StringFilter<"MedicationInventory"> | string
    form?: StringFilter<"MedicationInventory"> | string
    strength?: StringFilter<"MedicationInventory"> | string
    batchNumber?: StringFilter<"MedicationInventory"> | string
    quantity?: IntFilter<"MedicationInventory"> | number
    reorderLevel?: IntFilter<"MedicationInventory"> | number
    status?: EnumMedicationStatusFilter<"MedicationInventory"> | $Enums.MedicationStatus
    supplier?: StringNullableFilter<"MedicationInventory"> | string | null
    orderDate?: DateTimeNullableFilter<"MedicationInventory"> | Date | string | null
    arrivalDate?: DateTimeNullableFilter<"MedicationInventory"> | Date | string | null
    expiryDate?: DateTimeNullableFilter<"MedicationInventory"> | Date | string | null
    reservedFor?: StringNullableFilter<"MedicationInventory"> | string | null
    createdAt?: DateTimeFilter<"MedicationInventory"> | Date | string
    updatedAt?: DateTimeFilter<"MedicationInventory"> | Date | string
    prescriptions?: PrescriptionListRelationFilter
  }

  export type MedicationInventoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    form?: SortOrder
    strength?: SortOrder
    batchNumber?: SortOrder
    quantity?: SortOrder
    reorderLevel?: SortOrder
    status?: SortOrder
    supplier?: SortOrderInput | SortOrder
    orderDate?: SortOrderInput | SortOrder
    arrivalDate?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    reservedFor?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prescriptions?: PrescriptionOrderByRelationAggregateInput
  }

  export type MedicationInventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicationInventoryWhereInput | MedicationInventoryWhereInput[]
    OR?: MedicationInventoryWhereInput[]
    NOT?: MedicationInventoryWhereInput | MedicationInventoryWhereInput[]
    name?: StringFilter<"MedicationInventory"> | string
    form?: StringFilter<"MedicationInventory"> | string
    strength?: StringFilter<"MedicationInventory"> | string
    batchNumber?: StringFilter<"MedicationInventory"> | string
    quantity?: IntFilter<"MedicationInventory"> | number
    reorderLevel?: IntFilter<"MedicationInventory"> | number
    status?: EnumMedicationStatusFilter<"MedicationInventory"> | $Enums.MedicationStatus
    supplier?: StringNullableFilter<"MedicationInventory"> | string | null
    orderDate?: DateTimeNullableFilter<"MedicationInventory"> | Date | string | null
    arrivalDate?: DateTimeNullableFilter<"MedicationInventory"> | Date | string | null
    expiryDate?: DateTimeNullableFilter<"MedicationInventory"> | Date | string | null
    reservedFor?: StringNullableFilter<"MedicationInventory"> | string | null
    createdAt?: DateTimeFilter<"MedicationInventory"> | Date | string
    updatedAt?: DateTimeFilter<"MedicationInventory"> | Date | string
    prescriptions?: PrescriptionListRelationFilter
  }, "id">

  export type MedicationInventoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    form?: SortOrder
    strength?: SortOrder
    batchNumber?: SortOrder
    quantity?: SortOrder
    reorderLevel?: SortOrder
    status?: SortOrder
    supplier?: SortOrderInput | SortOrder
    orderDate?: SortOrderInput | SortOrder
    arrivalDate?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    reservedFor?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicationInventoryCountOrderByAggregateInput
    _avg?: MedicationInventoryAvgOrderByAggregateInput
    _max?: MedicationInventoryMaxOrderByAggregateInput
    _min?: MedicationInventoryMinOrderByAggregateInput
    _sum?: MedicationInventorySumOrderByAggregateInput
  }

  export type MedicationInventoryScalarWhereWithAggregatesInput = {
    AND?: MedicationInventoryScalarWhereWithAggregatesInput | MedicationInventoryScalarWhereWithAggregatesInput[]
    OR?: MedicationInventoryScalarWhereWithAggregatesInput[]
    NOT?: MedicationInventoryScalarWhereWithAggregatesInput | MedicationInventoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicationInventory"> | string
    name?: StringWithAggregatesFilter<"MedicationInventory"> | string
    form?: StringWithAggregatesFilter<"MedicationInventory"> | string
    strength?: StringWithAggregatesFilter<"MedicationInventory"> | string
    batchNumber?: StringWithAggregatesFilter<"MedicationInventory"> | string
    quantity?: IntWithAggregatesFilter<"MedicationInventory"> | number
    reorderLevel?: IntWithAggregatesFilter<"MedicationInventory"> | number
    status?: EnumMedicationStatusWithAggregatesFilter<"MedicationInventory"> | $Enums.MedicationStatus
    supplier?: StringNullableWithAggregatesFilter<"MedicationInventory"> | string | null
    orderDate?: DateTimeNullableWithAggregatesFilter<"MedicationInventory"> | Date | string | null
    arrivalDate?: DateTimeNullableWithAggregatesFilter<"MedicationInventory"> | Date | string | null
    expiryDate?: DateTimeNullableWithAggregatesFilter<"MedicationInventory"> | Date | string | null
    reservedFor?: StringNullableWithAggregatesFilter<"MedicationInventory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MedicationInventory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MedicationInventory"> | Date | string
  }

  export type PrescriptionWhereInput = {
    AND?: PrescriptionWhereInput | PrescriptionWhereInput[]
    OR?: PrescriptionWhereInput[]
    NOT?: PrescriptionWhereInput | PrescriptionWhereInput[]
    id?: StringFilter<"Prescription"> | string
    patientMedicationId?: StringFilter<"Prescription"> | string
    medicationInventoryId?: StringFilter<"Prescription"> | string
    createdAt?: DateTimeFilter<"Prescription"> | Date | string
    medicalRecordId?: StringFilter<"Prescription"> | string
    medicalRecord?: XOR<MedicalRecordScalarRelationFilter, MedicalRecordWhereInput>
    patientMedication?: XOR<PatientMedicationScalarRelationFilter, PatientMedicationWhereInput>
    medication?: XOR<MedicationInventoryScalarRelationFilter, MedicationInventoryWhereInput>
  }

  export type PrescriptionOrderByWithRelationInput = {
    id?: SortOrder
    patientMedicationId?: SortOrder
    medicationInventoryId?: SortOrder
    createdAt?: SortOrder
    medicalRecordId?: SortOrder
    medicalRecord?: MedicalRecordOrderByWithRelationInput
    patientMedication?: PatientMedicationOrderByWithRelationInput
    medication?: MedicationInventoryOrderByWithRelationInput
  }

  export type PrescriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrescriptionWhereInput | PrescriptionWhereInput[]
    OR?: PrescriptionWhereInput[]
    NOT?: PrescriptionWhereInput | PrescriptionWhereInput[]
    patientMedicationId?: StringFilter<"Prescription"> | string
    medicationInventoryId?: StringFilter<"Prescription"> | string
    createdAt?: DateTimeFilter<"Prescription"> | Date | string
    medicalRecordId?: StringFilter<"Prescription"> | string
    medicalRecord?: XOR<MedicalRecordScalarRelationFilter, MedicalRecordWhereInput>
    patientMedication?: XOR<PatientMedicationScalarRelationFilter, PatientMedicationWhereInput>
    medication?: XOR<MedicationInventoryScalarRelationFilter, MedicationInventoryWhereInput>
  }, "id">

  export type PrescriptionOrderByWithAggregationInput = {
    id?: SortOrder
    patientMedicationId?: SortOrder
    medicationInventoryId?: SortOrder
    createdAt?: SortOrder
    medicalRecordId?: SortOrder
    _count?: PrescriptionCountOrderByAggregateInput
    _max?: PrescriptionMaxOrderByAggregateInput
    _min?: PrescriptionMinOrderByAggregateInput
  }

  export type PrescriptionScalarWhereWithAggregatesInput = {
    AND?: PrescriptionScalarWhereWithAggregatesInput | PrescriptionScalarWhereWithAggregatesInput[]
    OR?: PrescriptionScalarWhereWithAggregatesInput[]
    NOT?: PrescriptionScalarWhereWithAggregatesInput | PrescriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prescription"> | string
    patientMedicationId?: StringWithAggregatesFilter<"Prescription"> | string
    medicationInventoryId?: StringWithAggregatesFilter<"Prescription"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Prescription"> | Date | string
    medicalRecordId?: StringWithAggregatesFilter<"Prescription"> | string
  }

  export type PatientMedicationWhereInput = {
    AND?: PatientMedicationWhereInput | PatientMedicationWhereInput[]
    OR?: PatientMedicationWhereInput[]
    NOT?: PatientMedicationWhereInput | PatientMedicationWhereInput[]
    id?: StringFilter<"PatientMedication"> | string
    patientId?: StringFilter<"PatientMedication"> | string
    prescribedById?: StringFilter<"PatientMedication"> | string
    prescribedByName?: StringFilter<"PatientMedication"> | string
    name?: StringFilter<"PatientMedication"> | string
    dosage?: StringFilter<"PatientMedication"> | string
    frequency?: StringFilter<"PatientMedication"> | string
    route?: StringFilter<"PatientMedication"> | string
    startDate?: DateTimeFilter<"PatientMedication"> | Date | string
    endDate?: DateTimeNullableFilter<"PatientMedication"> | Date | string | null
    status?: StringFilter<"PatientMedication"> | string
    instructions?: StringNullableFilter<"PatientMedication"> | string | null
    createdAt?: DateTimeFilter<"PatientMedication"> | Date | string
    updatedAt?: DateTimeFilter<"PatientMedication"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    prescribedBy?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    prescriptions?: PrescriptionListRelationFilter
  }

  export type PatientMedicationOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    prescribedById?: SortOrder
    prescribedByName?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    route?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrder
    instructions?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    prescribedBy?: DoctorOrderByWithRelationInput
    prescriptions?: PrescriptionOrderByRelationAggregateInput
  }

  export type PatientMedicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PatientMedicationWhereInput | PatientMedicationWhereInput[]
    OR?: PatientMedicationWhereInput[]
    NOT?: PatientMedicationWhereInput | PatientMedicationWhereInput[]
    patientId?: StringFilter<"PatientMedication"> | string
    prescribedById?: StringFilter<"PatientMedication"> | string
    prescribedByName?: StringFilter<"PatientMedication"> | string
    name?: StringFilter<"PatientMedication"> | string
    dosage?: StringFilter<"PatientMedication"> | string
    frequency?: StringFilter<"PatientMedication"> | string
    route?: StringFilter<"PatientMedication"> | string
    startDate?: DateTimeFilter<"PatientMedication"> | Date | string
    endDate?: DateTimeNullableFilter<"PatientMedication"> | Date | string | null
    status?: StringFilter<"PatientMedication"> | string
    instructions?: StringNullableFilter<"PatientMedication"> | string | null
    createdAt?: DateTimeFilter<"PatientMedication"> | Date | string
    updatedAt?: DateTimeFilter<"PatientMedication"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    prescribedBy?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    prescriptions?: PrescriptionListRelationFilter
  }, "id">

  export type PatientMedicationOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    prescribedById?: SortOrder
    prescribedByName?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    route?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrder
    instructions?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientMedicationCountOrderByAggregateInput
    _max?: PatientMedicationMaxOrderByAggregateInput
    _min?: PatientMedicationMinOrderByAggregateInput
  }

  export type PatientMedicationScalarWhereWithAggregatesInput = {
    AND?: PatientMedicationScalarWhereWithAggregatesInput | PatientMedicationScalarWhereWithAggregatesInput[]
    OR?: PatientMedicationScalarWhereWithAggregatesInput[]
    NOT?: PatientMedicationScalarWhereWithAggregatesInput | PatientMedicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PatientMedication"> | string
    patientId?: StringWithAggregatesFilter<"PatientMedication"> | string
    prescribedById?: StringWithAggregatesFilter<"PatientMedication"> | string
    prescribedByName?: StringWithAggregatesFilter<"PatientMedication"> | string
    name?: StringWithAggregatesFilter<"PatientMedication"> | string
    dosage?: StringWithAggregatesFilter<"PatientMedication"> | string
    frequency?: StringWithAggregatesFilter<"PatientMedication"> | string
    route?: StringWithAggregatesFilter<"PatientMedication"> | string
    startDate?: DateTimeWithAggregatesFilter<"PatientMedication"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"PatientMedication"> | Date | string | null
    status?: StringWithAggregatesFilter<"PatientMedication"> | string
    instructions?: StringNullableWithAggregatesFilter<"PatientMedication"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PatientMedication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PatientMedication"> | Date | string
  }

  export type LabTestWhereInput = {
    AND?: LabTestWhereInput | LabTestWhereInput[]
    OR?: LabTestWhereInput[]
    NOT?: LabTestWhereInput | LabTestWhereInput[]
    id?: StringFilter<"LabTest"> | string
    patientId?: StringFilter<"LabTest"> | string
    doctorId?: StringFilter<"LabTest"> | string
    testType?: StringFilter<"LabTest"> | string
    status?: EnumLabStatusFilter<"LabTest"> | $Enums.LabStatus
    requestedAt?: DateTimeFilter<"LabTest"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"LabTest"> | Date | string | null
    result?: StringNullableFilter<"LabTest"> | string | null
    validatedAt?: DateTimeNullableFilter<"LabTest"> | Date | string | null
    releasedAt?: DateTimeNullableFilter<"LabTest"> | Date | string | null
    medicalRecordId?: StringFilter<"LabTest"> | string
    medicalRecord?: XOR<MedicalRecordScalarRelationFilter, MedicalRecordWhereInput>
  }

  export type LabTestOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    testType?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    validatedAt?: SortOrderInput | SortOrder
    releasedAt?: SortOrderInput | SortOrder
    medicalRecordId?: SortOrder
    medicalRecord?: MedicalRecordOrderByWithRelationInput
  }

  export type LabTestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LabTestWhereInput | LabTestWhereInput[]
    OR?: LabTestWhereInput[]
    NOT?: LabTestWhereInput | LabTestWhereInput[]
    patientId?: StringFilter<"LabTest"> | string
    doctorId?: StringFilter<"LabTest"> | string
    testType?: StringFilter<"LabTest"> | string
    status?: EnumLabStatusFilter<"LabTest"> | $Enums.LabStatus
    requestedAt?: DateTimeFilter<"LabTest"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"LabTest"> | Date | string | null
    result?: StringNullableFilter<"LabTest"> | string | null
    validatedAt?: DateTimeNullableFilter<"LabTest"> | Date | string | null
    releasedAt?: DateTimeNullableFilter<"LabTest"> | Date | string | null
    medicalRecordId?: StringFilter<"LabTest"> | string
    medicalRecord?: XOR<MedicalRecordScalarRelationFilter, MedicalRecordWhereInput>
  }, "id">

  export type LabTestOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    testType?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    validatedAt?: SortOrderInput | SortOrder
    releasedAt?: SortOrderInput | SortOrder
    medicalRecordId?: SortOrder
    _count?: LabTestCountOrderByAggregateInput
    _max?: LabTestMaxOrderByAggregateInput
    _min?: LabTestMinOrderByAggregateInput
  }

  export type LabTestScalarWhereWithAggregatesInput = {
    AND?: LabTestScalarWhereWithAggregatesInput | LabTestScalarWhereWithAggregatesInput[]
    OR?: LabTestScalarWhereWithAggregatesInput[]
    NOT?: LabTestScalarWhereWithAggregatesInput | LabTestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LabTest"> | string
    patientId?: StringWithAggregatesFilter<"LabTest"> | string
    doctorId?: StringWithAggregatesFilter<"LabTest"> | string
    testType?: StringWithAggregatesFilter<"LabTest"> | string
    status?: EnumLabStatusWithAggregatesFilter<"LabTest"> | $Enums.LabStatus
    requestedAt?: DateTimeWithAggregatesFilter<"LabTest"> | Date | string
    acceptedAt?: DateTimeNullableWithAggregatesFilter<"LabTest"> | Date | string | null
    result?: StringNullableWithAggregatesFilter<"LabTest"> | string | null
    validatedAt?: DateTimeNullableWithAggregatesFilter<"LabTest"> | Date | string | null
    releasedAt?: DateTimeNullableWithAggregatesFilter<"LabTest"> | Date | string | null
    medicalRecordId?: StringWithAggregatesFilter<"LabTest"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    createdAt?: Date | string
    patients?: PatientCreateNestedManyWithoutDoctorInput
    patientProfile?: PatientCreateNestedOneWithoutUserInput
    doctor?: DoctorCreateNestedOneWithoutUserInput
    nurse?: NurseCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    createdAt?: Date | string
    patients?: PatientUncheckedCreateNestedManyWithoutDoctorInput
    patientProfile?: PatientUncheckedCreateNestedOneWithoutUserInput
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    nurse?: NurseUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUpdateManyWithoutDoctorNestedInput
    patientProfile?: PatientUpdateOneWithoutUserNestedInput
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    nurse?: NurseUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUncheckedUpdateManyWithoutDoctorNestedInput
    patientProfile?: PatientUncheckedUpdateOneWithoutUserNestedInput
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    nurse?: NurseUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateInput = {
    fullName: string
    dateOfBirth: Date | string
    gender: string
    phone: string
    address: string
    emergencyContact: string
    insuranceDetails?: string | null
    doctor: UserCreateNestedOneWithoutPatientsInput
    user: UserCreateNestedOneWithoutPatientProfileInput
    records?: MedicalRecordCreateNestedManyWithoutPatientInput
    patientMedication?: PatientMedicationCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    userId: string
    fullName: string
    dateOfBirth: Date | string
    gender: string
    phone: string
    address: string
    emergencyContact: string
    insuranceDetails?: string | null
    doctorId: string
    records?: MedicalRecordUncheckedCreateNestedManyWithoutPatientInput
    patientMedication?: PatientMedicationUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    insuranceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: UserUpdateOneRequiredWithoutPatientsNestedInput
    user?: UserUpdateOneRequiredWithoutPatientProfileNestedInput
    records?: MedicalRecordUpdateManyWithoutPatientNestedInput
    patientMedication?: PatientMedicationUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    insuranceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: StringFieldUpdateOperationsInput | string
    records?: MedicalRecordUncheckedUpdateManyWithoutPatientNestedInput
    patientMedication?: PatientMedicationUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    userId: string
    fullName: string
    dateOfBirth: Date | string
    gender: string
    phone: string
    address: string
    emergencyContact: string
    insuranceDetails?: string | null
    doctorId: string
  }

  export type PatientUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    insuranceDetails?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PatientUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    insuranceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorCreateInput = {
    specialization: string
    user: UserCreateNestedOneWithoutDoctorInput
    patientMedication?: PatientMedicationCreateNestedManyWithoutPrescribedByInput
    medicalRecords?: MedicalRecordCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    userId: string
    specialization: string
    patientMedication?: PatientMedicationUncheckedCreateNestedManyWithoutPrescribedByInput
    medicalRecords?: MedicalRecordUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUpdateInput = {
    specialization?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    patientMedication?: PatientMedicationUpdateManyWithoutPrescribedByNestedInput
    medicalRecords?: MedicalRecordUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    patientMedication?: PatientMedicationUncheckedUpdateManyWithoutPrescribedByNestedInput
    medicalRecords?: MedicalRecordUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateManyInput = {
    userId: string
    specialization: string
  }

  export type DoctorUpdateManyMutationInput = {
    specialization?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
  }

  export type NurseCreateInput = {
    shift: string
    department: string
    user: UserCreateNestedOneWithoutNurseInput
  }

  export type NurseUncheckedCreateInput = {
    userId: string
    shift: string
    department: string
  }

  export type NurseUpdateInput = {
    shift?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutNurseNestedInput
  }

  export type NurseUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    shift?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type NurseCreateManyInput = {
    userId: string
    shift: string
    department: string
  }

  export type NurseUpdateManyMutationInput = {
    shift?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type NurseUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    shift?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateInput = {
    permissions: string
    user: UserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    userId: string
    permissions: string
  }

  export type AdminUpdateInput = {
    permissions?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    permissions?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    userId: string
    permissions: string
  }

  export type AdminUpdateManyMutationInput = {
    permissions?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    permissions?: StringFieldUpdateOperationsInput | string
  }

  export type MedicalRecordCreateInput = {
    id?: string
    diagnosis: string
    notes?: string | null
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutRecordsInput
    doctor: DoctorCreateNestedOneWithoutMedicalRecordsInput
    prescriptions?: PrescriptionCreateNestedManyWithoutMedicalRecordInput
    labTests?: LabTestCreateNestedManyWithoutMedicalRecordInput
  }

  export type MedicalRecordUncheckedCreateInput = {
    id?: string
    diagnosis: string
    notes?: string | null
    createdAt?: Date | string
    patientId: string
    doctorId: string
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutMedicalRecordInput
    labTests?: LabTestUncheckedCreateNestedManyWithoutMedicalRecordInput
  }

  export type MedicalRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutRecordsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutMedicalRecordsNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutMedicalRecordNestedInput
    labTests?: LabTestUpdateManyWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutMedicalRecordNestedInput
    labTests?: LabTestUncheckedUpdateManyWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordCreateManyInput = {
    id?: string
    diagnosis: string
    notes?: string | null
    createdAt?: Date | string
    patientId: string
    doctorId: string
  }

  export type MedicalRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type MedicationInventoryCreateInput = {
    id?: string
    name: string
    form: string
    strength: string
    batchNumber: string
    quantity: number
    reorderLevel: number
    status?: $Enums.MedicationStatus
    supplier?: string | null
    orderDate?: Date | string | null
    arrivalDate?: Date | string | null
    expiryDate?: Date | string | null
    reservedFor?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prescriptions?: PrescriptionCreateNestedManyWithoutMedicationInput
  }

  export type MedicationInventoryUncheckedCreateInput = {
    id?: string
    name: string
    form: string
    strength: string
    batchNumber: string
    quantity: number
    reorderLevel: number
    status?: $Enums.MedicationStatus
    supplier?: string | null
    orderDate?: Date | string | null
    arrivalDate?: Date | string | null
    expiryDate?: Date | string | null
    reservedFor?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationInventoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    form?: StringFieldUpdateOperationsInput | string
    strength?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    reorderLevel?: IntFieldUpdateOperationsInput | number
    status?: EnumMedicationStatusFieldUpdateOperationsInput | $Enums.MedicationStatus
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservedFor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptions?: PrescriptionUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationInventoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    form?: StringFieldUpdateOperationsInput | string
    strength?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    reorderLevel?: IntFieldUpdateOperationsInput | number
    status?: EnumMedicationStatusFieldUpdateOperationsInput | $Enums.MedicationStatus
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservedFor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationInventoryCreateManyInput = {
    id?: string
    name: string
    form: string
    strength: string
    batchNumber: string
    quantity: number
    reorderLevel: number
    status?: $Enums.MedicationStatus
    supplier?: string | null
    orderDate?: Date | string | null
    arrivalDate?: Date | string | null
    expiryDate?: Date | string | null
    reservedFor?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationInventoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    form?: StringFieldUpdateOperationsInput | string
    strength?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    reorderLevel?: IntFieldUpdateOperationsInput | number
    status?: EnumMedicationStatusFieldUpdateOperationsInput | $Enums.MedicationStatus
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservedFor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationInventoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    form?: StringFieldUpdateOperationsInput | string
    strength?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    reorderLevel?: IntFieldUpdateOperationsInput | number
    status?: EnumMedicationStatusFieldUpdateOperationsInput | $Enums.MedicationStatus
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservedFor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionCreateInput = {
    id?: string
    createdAt?: Date | string
    medicalRecord: MedicalRecordCreateNestedOneWithoutPrescriptionsInput
    patientMedication: PatientMedicationCreateNestedOneWithoutPrescriptionsInput
    medication: MedicationInventoryCreateNestedOneWithoutPrescriptionsInput
  }

  export type PrescriptionUncheckedCreateInput = {
    id?: string
    patientMedicationId: string
    medicationInventoryId: string
    createdAt?: Date | string
    medicalRecordId: string
  }

  export type PrescriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalRecord?: MedicalRecordUpdateOneRequiredWithoutPrescriptionsNestedInput
    patientMedication?: PatientMedicationUpdateOneRequiredWithoutPrescriptionsNestedInput
    medication?: MedicationInventoryUpdateOneRequiredWithoutPrescriptionsNestedInput
  }

  export type PrescriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientMedicationId?: StringFieldUpdateOperationsInput | string
    medicationInventoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalRecordId?: StringFieldUpdateOperationsInput | string
  }

  export type PrescriptionCreateManyInput = {
    id?: string
    patientMedicationId: string
    medicationInventoryId: string
    createdAt?: Date | string
    medicalRecordId: string
  }

  export type PrescriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientMedicationId?: StringFieldUpdateOperationsInput | string
    medicationInventoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalRecordId?: StringFieldUpdateOperationsInput | string
  }

  export type PatientMedicationCreateInput = {
    id?: string
    prescribedByName: string
    name: string
    dosage: string
    frequency: string
    route: string
    startDate: Date | string
    endDate?: Date | string | null
    status: string
    instructions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutPatientMedicationInput
    prescribedBy: DoctorCreateNestedOneWithoutPatientMedicationInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPatientMedicationInput
  }

  export type PatientMedicationUncheckedCreateInput = {
    id?: string
    patientId: string
    prescribedById: string
    prescribedByName: string
    name: string
    dosage: string
    frequency: string
    route: string
    startDate: Date | string
    endDate?: Date | string | null
    status: string
    instructions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPatientMedicationInput
  }

  export type PatientMedicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prescribedByName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutPatientMedicationNestedInput
    prescribedBy?: DoctorUpdateOneRequiredWithoutPatientMedicationNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPatientMedicationNestedInput
  }

  export type PatientMedicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    prescribedById?: StringFieldUpdateOperationsInput | string
    prescribedByName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPatientMedicationNestedInput
  }

  export type PatientMedicationCreateManyInput = {
    id?: string
    patientId: string
    prescribedById: string
    prescribedByName: string
    name: string
    dosage: string
    frequency: string
    route: string
    startDate: Date | string
    endDate?: Date | string | null
    status: string
    instructions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientMedicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prescribedByName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientMedicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    prescribedById?: StringFieldUpdateOperationsInput | string
    prescribedByName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabTestCreateInput = {
    id?: string
    patientId: string
    doctorId: string
    testType: string
    status?: $Enums.LabStatus
    requestedAt?: Date | string
    acceptedAt?: Date | string | null
    result?: string | null
    validatedAt?: Date | string | null
    releasedAt?: Date | string | null
    medicalRecord: MedicalRecordCreateNestedOneWithoutLabTestsInput
  }

  export type LabTestUncheckedCreateInput = {
    id?: string
    patientId: string
    doctorId: string
    testType: string
    status?: $Enums.LabStatus
    requestedAt?: Date | string
    acceptedAt?: Date | string | null
    result?: string | null
    validatedAt?: Date | string | null
    releasedAt?: Date | string | null
    medicalRecordId: string
  }

  export type LabTestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    status?: EnumLabStatusFieldUpdateOperationsInput | $Enums.LabStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalRecord?: MedicalRecordUpdateOneRequiredWithoutLabTestsNestedInput
  }

  export type LabTestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    status?: EnumLabStatusFieldUpdateOperationsInput | $Enums.LabStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalRecordId?: StringFieldUpdateOperationsInput | string
  }

  export type LabTestCreateManyInput = {
    id?: string
    patientId: string
    doctorId: string
    testType: string
    status?: $Enums.LabStatus
    requestedAt?: Date | string
    acceptedAt?: Date | string | null
    result?: string | null
    validatedAt?: Date | string | null
    releasedAt?: Date | string | null
    medicalRecordId: string
  }

  export type LabTestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    status?: EnumLabStatusFieldUpdateOperationsInput | $Enums.LabStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LabTestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    status?: EnumLabStatusFieldUpdateOperationsInput | $Enums.LabStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalRecordId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PatientListRelationFilter = {
    every?: PatientWhereInput
    some?: PatientWhereInput
    none?: PatientWhereInput
  }

  export type PatientNullableScalarRelationFilter = {
    is?: PatientWhereInput | null
    isNot?: PatientWhereInput | null
  }

  export type DoctorNullableScalarRelationFilter = {
    is?: DoctorWhereInput | null
    isNot?: DoctorWhereInput | null
  }

  export type NurseNullableScalarRelationFilter = {
    is?: NurseWhereInput | null
    isNot?: NurseWhereInput | null
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type PatientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MedicalRecordListRelationFilter = {
    every?: MedicalRecordWhereInput
    some?: MedicalRecordWhereInput
    none?: MedicalRecordWhereInput
  }

  export type PatientMedicationListRelationFilter = {
    every?: PatientMedicationWhereInput
    some?: PatientMedicationWhereInput
    none?: PatientMedicationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MedicalRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientMedicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    userId?: SortOrder
    fullName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    emergencyContact?: SortOrder
    insuranceDetails?: SortOrder
    doctorId?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    userId?: SortOrder
    fullName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    emergencyContact?: SortOrder
    insuranceDetails?: SortOrder
    doctorId?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    userId?: SortOrder
    fullName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    emergencyContact?: SortOrder
    insuranceDetails?: SortOrder
    doctorId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DoctorCountOrderByAggregateInput = {
    userId?: SortOrder
    specialization?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    userId?: SortOrder
    specialization?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    userId?: SortOrder
    specialization?: SortOrder
  }

  export type NurseCountOrderByAggregateInput = {
    userId?: SortOrder
    shift?: SortOrder
    department?: SortOrder
  }

  export type NurseMaxOrderByAggregateInput = {
    userId?: SortOrder
    shift?: SortOrder
    department?: SortOrder
  }

  export type NurseMinOrderByAggregateInput = {
    userId?: SortOrder
    shift?: SortOrder
    department?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    userId?: SortOrder
    permissions?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    userId?: SortOrder
    permissions?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    userId?: SortOrder
    permissions?: SortOrder
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type DoctorScalarRelationFilter = {
    is?: DoctorWhereInput
    isNot?: DoctorWhereInput
  }

  export type PrescriptionListRelationFilter = {
    every?: PrescriptionWhereInput
    some?: PrescriptionWhereInput
    none?: PrescriptionWhereInput
  }

  export type LabTestListRelationFilter = {
    every?: LabTestWhereInput
    some?: LabTestWhereInput
    none?: LabTestWhereInput
  }

  export type PrescriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LabTestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicalRecordCountOrderByAggregateInput = {
    id?: SortOrder
    diagnosis?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
  }

  export type MedicalRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    diagnosis?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
  }

  export type MedicalRecordMinOrderByAggregateInput = {
    id?: SortOrder
    diagnosis?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumMedicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MedicationStatus | EnumMedicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MedicationStatus[] | ListEnumMedicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MedicationStatus[] | ListEnumMedicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMedicationStatusFilter<$PrismaModel> | $Enums.MedicationStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MedicationInventoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    form?: SortOrder
    strength?: SortOrder
    batchNumber?: SortOrder
    quantity?: SortOrder
    reorderLevel?: SortOrder
    status?: SortOrder
    supplier?: SortOrder
    orderDate?: SortOrder
    arrivalDate?: SortOrder
    expiryDate?: SortOrder
    reservedFor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationInventoryAvgOrderByAggregateInput = {
    quantity?: SortOrder
    reorderLevel?: SortOrder
  }

  export type MedicationInventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    form?: SortOrder
    strength?: SortOrder
    batchNumber?: SortOrder
    quantity?: SortOrder
    reorderLevel?: SortOrder
    status?: SortOrder
    supplier?: SortOrder
    orderDate?: SortOrder
    arrivalDate?: SortOrder
    expiryDate?: SortOrder
    reservedFor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationInventoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    form?: SortOrder
    strength?: SortOrder
    batchNumber?: SortOrder
    quantity?: SortOrder
    reorderLevel?: SortOrder
    status?: SortOrder
    supplier?: SortOrder
    orderDate?: SortOrder
    arrivalDate?: SortOrder
    expiryDate?: SortOrder
    reservedFor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationInventorySumOrderByAggregateInput = {
    quantity?: SortOrder
    reorderLevel?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumMedicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MedicationStatus | EnumMedicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MedicationStatus[] | ListEnumMedicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MedicationStatus[] | ListEnumMedicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMedicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.MedicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMedicationStatusFilter<$PrismaModel>
    _max?: NestedEnumMedicationStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MedicalRecordScalarRelationFilter = {
    is?: MedicalRecordWhereInput
    isNot?: MedicalRecordWhereInput
  }

  export type PatientMedicationScalarRelationFilter = {
    is?: PatientMedicationWhereInput
    isNot?: PatientMedicationWhereInput
  }

  export type MedicationInventoryScalarRelationFilter = {
    is?: MedicationInventoryWhereInput
    isNot?: MedicationInventoryWhereInput
  }

  export type PrescriptionCountOrderByAggregateInput = {
    id?: SortOrder
    patientMedicationId?: SortOrder
    medicationInventoryId?: SortOrder
    createdAt?: SortOrder
    medicalRecordId?: SortOrder
  }

  export type PrescriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    patientMedicationId?: SortOrder
    medicationInventoryId?: SortOrder
    createdAt?: SortOrder
    medicalRecordId?: SortOrder
  }

  export type PrescriptionMinOrderByAggregateInput = {
    id?: SortOrder
    patientMedicationId?: SortOrder
    medicationInventoryId?: SortOrder
    createdAt?: SortOrder
    medicalRecordId?: SortOrder
  }

  export type PatientMedicationCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    prescribedById?: SortOrder
    prescribedByName?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    route?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    instructions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMedicationMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    prescribedById?: SortOrder
    prescribedByName?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    route?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    instructions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMedicationMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    prescribedById?: SortOrder
    prescribedByName?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    route?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    instructions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumLabStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LabStatus | EnumLabStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LabStatus[] | ListEnumLabStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LabStatus[] | ListEnumLabStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLabStatusFilter<$PrismaModel> | $Enums.LabStatus
  }

  export type LabTestCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    testType?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    acceptedAt?: SortOrder
    result?: SortOrder
    validatedAt?: SortOrder
    releasedAt?: SortOrder
    medicalRecordId?: SortOrder
  }

  export type LabTestMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    testType?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    acceptedAt?: SortOrder
    result?: SortOrder
    validatedAt?: SortOrder
    releasedAt?: SortOrder
    medicalRecordId?: SortOrder
  }

  export type LabTestMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    testType?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    acceptedAt?: SortOrder
    result?: SortOrder
    validatedAt?: SortOrder
    releasedAt?: SortOrder
    medicalRecordId?: SortOrder
  }

  export type EnumLabStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LabStatus | EnumLabStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LabStatus[] | ListEnumLabStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LabStatus[] | ListEnumLabStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLabStatusWithAggregatesFilter<$PrismaModel> | $Enums.LabStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLabStatusFilter<$PrismaModel>
    _max?: NestedEnumLabStatusFilter<$PrismaModel>
  }

  export type PatientCreateNestedManyWithoutDoctorInput = {
    create?: XOR<PatientCreateWithoutDoctorInput, PatientUncheckedCreateWithoutDoctorInput> | PatientCreateWithoutDoctorInput[] | PatientUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutDoctorInput | PatientCreateOrConnectWithoutDoctorInput[]
    createMany?: PatientCreateManyDoctorInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type PatientCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type NurseCreateNestedOneWithoutUserInput = {
    create?: XOR<NurseCreateWithoutUserInput, NurseUncheckedCreateWithoutUserInput>
    connectOrCreate?: NurseCreateOrConnectWithoutUserInput
    connect?: NurseWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type PatientUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<PatientCreateWithoutDoctorInput, PatientUncheckedCreateWithoutDoctorInput> | PatientCreateWithoutDoctorInput[] | PatientUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutDoctorInput | PatientCreateOrConnectWithoutDoctorInput[]
    createMany?: PatientCreateManyDoctorInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type NurseUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<NurseCreateWithoutUserInput, NurseUncheckedCreateWithoutUserInput>
    connectOrCreate?: NurseCreateOrConnectWithoutUserInput
    connect?: NurseWhereUniqueInput
  }

  export type AdminUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PatientUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<PatientCreateWithoutDoctorInput, PatientUncheckedCreateWithoutDoctorInput> | PatientCreateWithoutDoctorInput[] | PatientUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutDoctorInput | PatientCreateOrConnectWithoutDoctorInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutDoctorInput | PatientUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: PatientCreateManyDoctorInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutDoctorInput | PatientUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutDoctorInput | PatientUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type PatientUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutUserInput, DoctorUpdateWithoutUserInput>, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type NurseUpdateOneWithoutUserNestedInput = {
    create?: XOR<NurseCreateWithoutUserInput, NurseUncheckedCreateWithoutUserInput>
    connectOrCreate?: NurseCreateOrConnectWithoutUserInput
    upsert?: NurseUpsertWithoutUserInput
    disconnect?: NurseWhereInput | boolean
    delete?: NurseWhereInput | boolean
    connect?: NurseWhereUniqueInput
    update?: XOR<XOR<NurseUpdateToOneWithWhereWithoutUserInput, NurseUpdateWithoutUserInput>, NurseUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type PatientUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<PatientCreateWithoutDoctorInput, PatientUncheckedCreateWithoutDoctorInput> | PatientCreateWithoutDoctorInput[] | PatientUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutDoctorInput | PatientCreateOrConnectWithoutDoctorInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutDoctorInput | PatientUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: PatientCreateManyDoctorInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutDoctorInput | PatientUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutDoctorInput | PatientUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type PatientUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutUserInput, DoctorUpdateWithoutUserInput>, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type NurseUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<NurseCreateWithoutUserInput, NurseUncheckedCreateWithoutUserInput>
    connectOrCreate?: NurseCreateOrConnectWithoutUserInput
    upsert?: NurseUpsertWithoutUserInput
    disconnect?: NurseWhereInput | boolean
    delete?: NurseWhereInput | boolean
    connect?: NurseWhereUniqueInput
    update?: XOR<XOR<NurseUpdateToOneWithWhereWithoutUserInput, NurseUpdateWithoutUserInput>, NurseUncheckedUpdateWithoutUserInput>
  }

  export type AdminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutPatientsInput = {
    create?: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPatientProfileInput = {
    create?: XOR<UserCreateWithoutPatientProfileInput, UserUncheckedCreateWithoutPatientProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientProfileInput
    connect?: UserWhereUniqueInput
  }

  export type MedicalRecordCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput> | MedicalRecordCreateWithoutPatientInput[] | MedicalRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPatientInput | MedicalRecordCreateOrConnectWithoutPatientInput[]
    createMany?: MedicalRecordCreateManyPatientInputEnvelope
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
  }

  export type PatientMedicationCreateNestedManyWithoutPatientInput = {
    create?: XOR<PatientMedicationCreateWithoutPatientInput, PatientMedicationUncheckedCreateWithoutPatientInput> | PatientMedicationCreateWithoutPatientInput[] | PatientMedicationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientMedicationCreateOrConnectWithoutPatientInput | PatientMedicationCreateOrConnectWithoutPatientInput[]
    createMany?: PatientMedicationCreateManyPatientInputEnvelope
    connect?: PatientMedicationWhereUniqueInput | PatientMedicationWhereUniqueInput[]
  }

  export type MedicalRecordUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput> | MedicalRecordCreateWithoutPatientInput[] | MedicalRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPatientInput | MedicalRecordCreateOrConnectWithoutPatientInput[]
    createMany?: MedicalRecordCreateManyPatientInputEnvelope
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
  }

  export type PatientMedicationUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<PatientMedicationCreateWithoutPatientInput, PatientMedicationUncheckedCreateWithoutPatientInput> | PatientMedicationCreateWithoutPatientInput[] | PatientMedicationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientMedicationCreateOrConnectWithoutPatientInput | PatientMedicationCreateOrConnectWithoutPatientInput[]
    createMany?: PatientMedicationCreateManyPatientInputEnvelope
    connect?: PatientMedicationWhereUniqueInput | PatientMedicationWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutPatientsNestedInput = {
    create?: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientsInput
    upsert?: UserUpsertWithoutPatientsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientsInput, UserUpdateWithoutPatientsInput>, UserUncheckedUpdateWithoutPatientsInput>
  }

  export type UserUpdateOneRequiredWithoutPatientProfileNestedInput = {
    create?: XOR<UserCreateWithoutPatientProfileInput, UserUncheckedCreateWithoutPatientProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientProfileInput
    upsert?: UserUpsertWithoutPatientProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientProfileInput, UserUpdateWithoutPatientProfileInput>, UserUncheckedUpdateWithoutPatientProfileInput>
  }

  export type MedicalRecordUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput> | MedicalRecordCreateWithoutPatientInput[] | MedicalRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPatientInput | MedicalRecordCreateOrConnectWithoutPatientInput[]
    upsert?: MedicalRecordUpsertWithWhereUniqueWithoutPatientInput | MedicalRecordUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicalRecordCreateManyPatientInputEnvelope
    set?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    disconnect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    delete?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    update?: MedicalRecordUpdateWithWhereUniqueWithoutPatientInput | MedicalRecordUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicalRecordUpdateManyWithWhereWithoutPatientInput | MedicalRecordUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
  }

  export type PatientMedicationUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PatientMedicationCreateWithoutPatientInput, PatientMedicationUncheckedCreateWithoutPatientInput> | PatientMedicationCreateWithoutPatientInput[] | PatientMedicationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientMedicationCreateOrConnectWithoutPatientInput | PatientMedicationCreateOrConnectWithoutPatientInput[]
    upsert?: PatientMedicationUpsertWithWhereUniqueWithoutPatientInput | PatientMedicationUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PatientMedicationCreateManyPatientInputEnvelope
    set?: PatientMedicationWhereUniqueInput | PatientMedicationWhereUniqueInput[]
    disconnect?: PatientMedicationWhereUniqueInput | PatientMedicationWhereUniqueInput[]
    delete?: PatientMedicationWhereUniqueInput | PatientMedicationWhereUniqueInput[]
    connect?: PatientMedicationWhereUniqueInput | PatientMedicationWhereUniqueInput[]
    update?: PatientMedicationUpdateWithWhereUniqueWithoutPatientInput | PatientMedicationUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PatientMedicationUpdateManyWithWhereWithoutPatientInput | PatientMedicationUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PatientMedicationScalarWhereInput | PatientMedicationScalarWhereInput[]
  }

  export type MedicalRecordUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput> | MedicalRecordCreateWithoutPatientInput[] | MedicalRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPatientInput | MedicalRecordCreateOrConnectWithoutPatientInput[]
    upsert?: MedicalRecordUpsertWithWhereUniqueWithoutPatientInput | MedicalRecordUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicalRecordCreateManyPatientInputEnvelope
    set?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    disconnect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    delete?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    update?: MedicalRecordUpdateWithWhereUniqueWithoutPatientInput | MedicalRecordUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicalRecordUpdateManyWithWhereWithoutPatientInput | MedicalRecordUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
  }

  export type PatientMedicationUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PatientMedicationCreateWithoutPatientInput, PatientMedicationUncheckedCreateWithoutPatientInput> | PatientMedicationCreateWithoutPatientInput[] | PatientMedicationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientMedicationCreateOrConnectWithoutPatientInput | PatientMedicationCreateOrConnectWithoutPatientInput[]
    upsert?: PatientMedicationUpsertWithWhereUniqueWithoutPatientInput | PatientMedicationUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PatientMedicationCreateManyPatientInputEnvelope
    set?: PatientMedicationWhereUniqueInput | PatientMedicationWhereUniqueInput[]
    disconnect?: PatientMedicationWhereUniqueInput | PatientMedicationWhereUniqueInput[]
    delete?: PatientMedicationWhereUniqueInput | PatientMedicationWhereUniqueInput[]
    connect?: PatientMedicationWhereUniqueInput | PatientMedicationWhereUniqueInput[]
    update?: PatientMedicationUpdateWithWhereUniqueWithoutPatientInput | PatientMedicationUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PatientMedicationUpdateManyWithWhereWithoutPatientInput | PatientMedicationUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PatientMedicationScalarWhereInput | PatientMedicationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDoctorInput = {
    create?: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInput
    connect?: UserWhereUniqueInput
  }

  export type PatientMedicationCreateNestedManyWithoutPrescribedByInput = {
    create?: XOR<PatientMedicationCreateWithoutPrescribedByInput, PatientMedicationUncheckedCreateWithoutPrescribedByInput> | PatientMedicationCreateWithoutPrescribedByInput[] | PatientMedicationUncheckedCreateWithoutPrescribedByInput[]
    connectOrCreate?: PatientMedicationCreateOrConnectWithoutPrescribedByInput | PatientMedicationCreateOrConnectWithoutPrescribedByInput[]
    createMany?: PatientMedicationCreateManyPrescribedByInputEnvelope
    connect?: PatientMedicationWhereUniqueInput | PatientMedicationWhereUniqueInput[]
  }

  export type MedicalRecordCreateNestedManyWithoutDoctorInput = {
    create?: XOR<MedicalRecordCreateWithoutDoctorInput, MedicalRecordUncheckedCreateWithoutDoctorInput> | MedicalRecordCreateWithoutDoctorInput[] | MedicalRecordUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutDoctorInput | MedicalRecordCreateOrConnectWithoutDoctorInput[]
    createMany?: MedicalRecordCreateManyDoctorInputEnvelope
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
  }

  export type PatientMedicationUncheckedCreateNestedManyWithoutPrescribedByInput = {
    create?: XOR<PatientMedicationCreateWithoutPrescribedByInput, PatientMedicationUncheckedCreateWithoutPrescribedByInput> | PatientMedicationCreateWithoutPrescribedByInput[] | PatientMedicationUncheckedCreateWithoutPrescribedByInput[]
    connectOrCreate?: PatientMedicationCreateOrConnectWithoutPrescribedByInput | PatientMedicationCreateOrConnectWithoutPrescribedByInput[]
    createMany?: PatientMedicationCreateManyPrescribedByInputEnvelope
    connect?: PatientMedicationWhereUniqueInput | PatientMedicationWhereUniqueInput[]
  }

  export type MedicalRecordUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<MedicalRecordCreateWithoutDoctorInput, MedicalRecordUncheckedCreateWithoutDoctorInput> | MedicalRecordCreateWithoutDoctorInput[] | MedicalRecordUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutDoctorInput | MedicalRecordCreateOrConnectWithoutDoctorInput[]
    createMany?: MedicalRecordCreateManyDoctorInputEnvelope
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDoctorNestedInput = {
    create?: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInput
    upsert?: UserUpsertWithoutDoctorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoctorInput, UserUpdateWithoutDoctorInput>, UserUncheckedUpdateWithoutDoctorInput>
  }

  export type PatientMedicationUpdateManyWithoutPrescribedByNestedInput = {
    create?: XOR<PatientMedicationCreateWithoutPrescribedByInput, PatientMedicationUncheckedCreateWithoutPrescribedByInput> | PatientMedicationCreateWithoutPrescribedByInput[] | PatientMedicationUncheckedCreateWithoutPrescribedByInput[]
    connectOrCreate?: PatientMedicationCreateOrConnectWithoutPrescribedByInput | PatientMedicationCreateOrConnectWithoutPrescribedByInput[]
    upsert?: PatientMedicationUpsertWithWhereUniqueWithoutPrescribedByInput | PatientMedicationUpsertWithWhereUniqueWithoutPrescribedByInput[]
    createMany?: PatientMedicationCreateManyPrescribedByInputEnvelope
    set?: PatientMedicationWhereUniqueInput | PatientMedicationWhereUniqueInput[]
    disconnect?: PatientMedicationWhereUniqueInput | PatientMedicationWhereUniqueInput[]
    delete?: PatientMedicationWhereUniqueInput | PatientMedicationWhereUniqueInput[]
    connect?: PatientMedicationWhereUniqueInput | PatientMedicationWhereUniqueInput[]
    update?: PatientMedicationUpdateWithWhereUniqueWithoutPrescribedByInput | PatientMedicationUpdateWithWhereUniqueWithoutPrescribedByInput[]
    updateMany?: PatientMedicationUpdateManyWithWhereWithoutPrescribedByInput | PatientMedicationUpdateManyWithWhereWithoutPrescribedByInput[]
    deleteMany?: PatientMedicationScalarWhereInput | PatientMedicationScalarWhereInput[]
  }

  export type MedicalRecordUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutDoctorInput, MedicalRecordUncheckedCreateWithoutDoctorInput> | MedicalRecordCreateWithoutDoctorInput[] | MedicalRecordUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutDoctorInput | MedicalRecordCreateOrConnectWithoutDoctorInput[]
    upsert?: MedicalRecordUpsertWithWhereUniqueWithoutDoctorInput | MedicalRecordUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: MedicalRecordCreateManyDoctorInputEnvelope
    set?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    disconnect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    delete?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    update?: MedicalRecordUpdateWithWhereUniqueWithoutDoctorInput | MedicalRecordUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: MedicalRecordUpdateManyWithWhereWithoutDoctorInput | MedicalRecordUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
  }

  export type PatientMedicationUncheckedUpdateManyWithoutPrescribedByNestedInput = {
    create?: XOR<PatientMedicationCreateWithoutPrescribedByInput, PatientMedicationUncheckedCreateWithoutPrescribedByInput> | PatientMedicationCreateWithoutPrescribedByInput[] | PatientMedicationUncheckedCreateWithoutPrescribedByInput[]
    connectOrCreate?: PatientMedicationCreateOrConnectWithoutPrescribedByInput | PatientMedicationCreateOrConnectWithoutPrescribedByInput[]
    upsert?: PatientMedicationUpsertWithWhereUniqueWithoutPrescribedByInput | PatientMedicationUpsertWithWhereUniqueWithoutPrescribedByInput[]
    createMany?: PatientMedicationCreateManyPrescribedByInputEnvelope
    set?: PatientMedicationWhereUniqueInput | PatientMedicationWhereUniqueInput[]
    disconnect?: PatientMedicationWhereUniqueInput | PatientMedicationWhereUniqueInput[]
    delete?: PatientMedicationWhereUniqueInput | PatientMedicationWhereUniqueInput[]
    connect?: PatientMedicationWhereUniqueInput | PatientMedicationWhereUniqueInput[]
    update?: PatientMedicationUpdateWithWhereUniqueWithoutPrescribedByInput | PatientMedicationUpdateWithWhereUniqueWithoutPrescribedByInput[]
    updateMany?: PatientMedicationUpdateManyWithWhereWithoutPrescribedByInput | PatientMedicationUpdateManyWithWhereWithoutPrescribedByInput[]
    deleteMany?: PatientMedicationScalarWhereInput | PatientMedicationScalarWhereInput[]
  }

  export type MedicalRecordUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutDoctorInput, MedicalRecordUncheckedCreateWithoutDoctorInput> | MedicalRecordCreateWithoutDoctorInput[] | MedicalRecordUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutDoctorInput | MedicalRecordCreateOrConnectWithoutDoctorInput[]
    upsert?: MedicalRecordUpsertWithWhereUniqueWithoutDoctorInput | MedicalRecordUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: MedicalRecordCreateManyDoctorInputEnvelope
    set?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    disconnect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    delete?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    update?: MedicalRecordUpdateWithWhereUniqueWithoutDoctorInput | MedicalRecordUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: MedicalRecordUpdateManyWithWhereWithoutDoctorInput | MedicalRecordUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNurseInput = {
    create?: XOR<UserCreateWithoutNurseInput, UserUncheckedCreateWithoutNurseInput>
    connectOrCreate?: UserCreateOrConnectWithoutNurseInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNurseNestedInput = {
    create?: XOR<UserCreateWithoutNurseInput, UserUncheckedCreateWithoutNurseInput>
    connectOrCreate?: UserCreateOrConnectWithoutNurseInput
    upsert?: UserUpsertWithoutNurseInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNurseInput, UserUpdateWithoutNurseInput>, UserUncheckedUpdateWithoutNurseInput>
  }

  export type UserCreateNestedOneWithoutAdminInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    upsert?: UserUpsertWithoutAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminInput, UserUpdateWithoutAdminInput>, UserUncheckedUpdateWithoutAdminInput>
  }

  export type PatientCreateNestedOneWithoutRecordsInput = {
    create?: XOR<PatientCreateWithoutRecordsInput, PatientUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutRecordsInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutMedicalRecordsInput = {
    create?: XOR<DoctorCreateWithoutMedicalRecordsInput, DoctorUncheckedCreateWithoutMedicalRecordsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutMedicalRecordsInput
    connect?: DoctorWhereUniqueInput
  }

  export type PrescriptionCreateNestedManyWithoutMedicalRecordInput = {
    create?: XOR<PrescriptionCreateWithoutMedicalRecordInput, PrescriptionUncheckedCreateWithoutMedicalRecordInput> | PrescriptionCreateWithoutMedicalRecordInput[] | PrescriptionUncheckedCreateWithoutMedicalRecordInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutMedicalRecordInput | PrescriptionCreateOrConnectWithoutMedicalRecordInput[]
    createMany?: PrescriptionCreateManyMedicalRecordInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type LabTestCreateNestedManyWithoutMedicalRecordInput = {
    create?: XOR<LabTestCreateWithoutMedicalRecordInput, LabTestUncheckedCreateWithoutMedicalRecordInput> | LabTestCreateWithoutMedicalRecordInput[] | LabTestUncheckedCreateWithoutMedicalRecordInput[]
    connectOrCreate?: LabTestCreateOrConnectWithoutMedicalRecordInput | LabTestCreateOrConnectWithoutMedicalRecordInput[]
    createMany?: LabTestCreateManyMedicalRecordInputEnvelope
    connect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutMedicalRecordInput = {
    create?: XOR<PrescriptionCreateWithoutMedicalRecordInput, PrescriptionUncheckedCreateWithoutMedicalRecordInput> | PrescriptionCreateWithoutMedicalRecordInput[] | PrescriptionUncheckedCreateWithoutMedicalRecordInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutMedicalRecordInput | PrescriptionCreateOrConnectWithoutMedicalRecordInput[]
    createMany?: PrescriptionCreateManyMedicalRecordInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type LabTestUncheckedCreateNestedManyWithoutMedicalRecordInput = {
    create?: XOR<LabTestCreateWithoutMedicalRecordInput, LabTestUncheckedCreateWithoutMedicalRecordInput> | LabTestCreateWithoutMedicalRecordInput[] | LabTestUncheckedCreateWithoutMedicalRecordInput[]
    connectOrCreate?: LabTestCreateOrConnectWithoutMedicalRecordInput | LabTestCreateOrConnectWithoutMedicalRecordInput[]
    createMany?: LabTestCreateManyMedicalRecordInputEnvelope
    connect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
  }

  export type PatientUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<PatientCreateWithoutRecordsInput, PatientUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutRecordsInput
    upsert?: PatientUpsertWithoutRecordsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutRecordsInput, PatientUpdateWithoutRecordsInput>, PatientUncheckedUpdateWithoutRecordsInput>
  }

  export type DoctorUpdateOneRequiredWithoutMedicalRecordsNestedInput = {
    create?: XOR<DoctorCreateWithoutMedicalRecordsInput, DoctorUncheckedCreateWithoutMedicalRecordsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutMedicalRecordsInput
    upsert?: DoctorUpsertWithoutMedicalRecordsInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutMedicalRecordsInput, DoctorUpdateWithoutMedicalRecordsInput>, DoctorUncheckedUpdateWithoutMedicalRecordsInput>
  }

  export type PrescriptionUpdateManyWithoutMedicalRecordNestedInput = {
    create?: XOR<PrescriptionCreateWithoutMedicalRecordInput, PrescriptionUncheckedCreateWithoutMedicalRecordInput> | PrescriptionCreateWithoutMedicalRecordInput[] | PrescriptionUncheckedCreateWithoutMedicalRecordInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutMedicalRecordInput | PrescriptionCreateOrConnectWithoutMedicalRecordInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInput | PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInput[]
    createMany?: PrescriptionCreateManyMedicalRecordInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInput | PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutMedicalRecordInput | PrescriptionUpdateManyWithWhereWithoutMedicalRecordInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type LabTestUpdateManyWithoutMedicalRecordNestedInput = {
    create?: XOR<LabTestCreateWithoutMedicalRecordInput, LabTestUncheckedCreateWithoutMedicalRecordInput> | LabTestCreateWithoutMedicalRecordInput[] | LabTestUncheckedCreateWithoutMedicalRecordInput[]
    connectOrCreate?: LabTestCreateOrConnectWithoutMedicalRecordInput | LabTestCreateOrConnectWithoutMedicalRecordInput[]
    upsert?: LabTestUpsertWithWhereUniqueWithoutMedicalRecordInput | LabTestUpsertWithWhereUniqueWithoutMedicalRecordInput[]
    createMany?: LabTestCreateManyMedicalRecordInputEnvelope
    set?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    disconnect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    delete?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    connect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    update?: LabTestUpdateWithWhereUniqueWithoutMedicalRecordInput | LabTestUpdateWithWhereUniqueWithoutMedicalRecordInput[]
    updateMany?: LabTestUpdateManyWithWhereWithoutMedicalRecordInput | LabTestUpdateManyWithWhereWithoutMedicalRecordInput[]
    deleteMany?: LabTestScalarWhereInput | LabTestScalarWhereInput[]
  }

  export type PrescriptionUncheckedUpdateManyWithoutMedicalRecordNestedInput = {
    create?: XOR<PrescriptionCreateWithoutMedicalRecordInput, PrescriptionUncheckedCreateWithoutMedicalRecordInput> | PrescriptionCreateWithoutMedicalRecordInput[] | PrescriptionUncheckedCreateWithoutMedicalRecordInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutMedicalRecordInput | PrescriptionCreateOrConnectWithoutMedicalRecordInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInput | PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInput[]
    createMany?: PrescriptionCreateManyMedicalRecordInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInput | PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutMedicalRecordInput | PrescriptionUpdateManyWithWhereWithoutMedicalRecordInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type LabTestUncheckedUpdateManyWithoutMedicalRecordNestedInput = {
    create?: XOR<LabTestCreateWithoutMedicalRecordInput, LabTestUncheckedCreateWithoutMedicalRecordInput> | LabTestCreateWithoutMedicalRecordInput[] | LabTestUncheckedCreateWithoutMedicalRecordInput[]
    connectOrCreate?: LabTestCreateOrConnectWithoutMedicalRecordInput | LabTestCreateOrConnectWithoutMedicalRecordInput[]
    upsert?: LabTestUpsertWithWhereUniqueWithoutMedicalRecordInput | LabTestUpsertWithWhereUniqueWithoutMedicalRecordInput[]
    createMany?: LabTestCreateManyMedicalRecordInputEnvelope
    set?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    disconnect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    delete?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    connect?: LabTestWhereUniqueInput | LabTestWhereUniqueInput[]
    update?: LabTestUpdateWithWhereUniqueWithoutMedicalRecordInput | LabTestUpdateWithWhereUniqueWithoutMedicalRecordInput[]
    updateMany?: LabTestUpdateManyWithWhereWithoutMedicalRecordInput | LabTestUpdateManyWithWhereWithoutMedicalRecordInput[]
    deleteMany?: LabTestScalarWhereInput | LabTestScalarWhereInput[]
  }

  export type PrescriptionCreateNestedManyWithoutMedicationInput = {
    create?: XOR<PrescriptionCreateWithoutMedicationInput, PrescriptionUncheckedCreateWithoutMedicationInput> | PrescriptionCreateWithoutMedicationInput[] | PrescriptionUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutMedicationInput | PrescriptionCreateOrConnectWithoutMedicationInput[]
    createMany?: PrescriptionCreateManyMedicationInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutMedicationInput = {
    create?: XOR<PrescriptionCreateWithoutMedicationInput, PrescriptionUncheckedCreateWithoutMedicationInput> | PrescriptionCreateWithoutMedicationInput[] | PrescriptionUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutMedicationInput | PrescriptionCreateOrConnectWithoutMedicationInput[]
    createMany?: PrescriptionCreateManyMedicationInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumMedicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.MedicationStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PrescriptionUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<PrescriptionCreateWithoutMedicationInput, PrescriptionUncheckedCreateWithoutMedicationInput> | PrescriptionCreateWithoutMedicationInput[] | PrescriptionUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutMedicationInput | PrescriptionCreateOrConnectWithoutMedicationInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutMedicationInput | PrescriptionUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: PrescriptionCreateManyMedicationInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutMedicationInput | PrescriptionUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutMedicationInput | PrescriptionUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type PrescriptionUncheckedUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<PrescriptionCreateWithoutMedicationInput, PrescriptionUncheckedCreateWithoutMedicationInput> | PrescriptionCreateWithoutMedicationInput[] | PrescriptionUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutMedicationInput | PrescriptionCreateOrConnectWithoutMedicationInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutMedicationInput | PrescriptionUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: PrescriptionCreateManyMedicationInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutMedicationInput | PrescriptionUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutMedicationInput | PrescriptionUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type MedicalRecordCreateNestedOneWithoutPrescriptionsInput = {
    create?: XOR<MedicalRecordCreateWithoutPrescriptionsInput, MedicalRecordUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPrescriptionsInput
    connect?: MedicalRecordWhereUniqueInput
  }

  export type PatientMedicationCreateNestedOneWithoutPrescriptionsInput = {
    create?: XOR<PatientMedicationCreateWithoutPrescriptionsInput, PatientMedicationUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: PatientMedicationCreateOrConnectWithoutPrescriptionsInput
    connect?: PatientMedicationWhereUniqueInput
  }

  export type MedicationInventoryCreateNestedOneWithoutPrescriptionsInput = {
    create?: XOR<MedicationInventoryCreateWithoutPrescriptionsInput, MedicationInventoryUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: MedicationInventoryCreateOrConnectWithoutPrescriptionsInput
    connect?: MedicationInventoryWhereUniqueInput
  }

  export type MedicalRecordUpdateOneRequiredWithoutPrescriptionsNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutPrescriptionsInput, MedicalRecordUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPrescriptionsInput
    upsert?: MedicalRecordUpsertWithoutPrescriptionsInput
    connect?: MedicalRecordWhereUniqueInput
    update?: XOR<XOR<MedicalRecordUpdateToOneWithWhereWithoutPrescriptionsInput, MedicalRecordUpdateWithoutPrescriptionsInput>, MedicalRecordUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type PatientMedicationUpdateOneRequiredWithoutPrescriptionsNestedInput = {
    create?: XOR<PatientMedicationCreateWithoutPrescriptionsInput, PatientMedicationUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: PatientMedicationCreateOrConnectWithoutPrescriptionsInput
    upsert?: PatientMedicationUpsertWithoutPrescriptionsInput
    connect?: PatientMedicationWhereUniqueInput
    update?: XOR<XOR<PatientMedicationUpdateToOneWithWhereWithoutPrescriptionsInput, PatientMedicationUpdateWithoutPrescriptionsInput>, PatientMedicationUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type MedicationInventoryUpdateOneRequiredWithoutPrescriptionsNestedInput = {
    create?: XOR<MedicationInventoryCreateWithoutPrescriptionsInput, MedicationInventoryUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: MedicationInventoryCreateOrConnectWithoutPrescriptionsInput
    upsert?: MedicationInventoryUpsertWithoutPrescriptionsInput
    connect?: MedicationInventoryWhereUniqueInput
    update?: XOR<XOR<MedicationInventoryUpdateToOneWithWhereWithoutPrescriptionsInput, MedicationInventoryUpdateWithoutPrescriptionsInput>, MedicationInventoryUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type PatientCreateNestedOneWithoutPatientMedicationInput = {
    create?: XOR<PatientCreateWithoutPatientMedicationInput, PatientUncheckedCreateWithoutPatientMedicationInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPatientMedicationInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutPatientMedicationInput = {
    create?: XOR<DoctorCreateWithoutPatientMedicationInput, DoctorUncheckedCreateWithoutPatientMedicationInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutPatientMedicationInput
    connect?: DoctorWhereUniqueInput
  }

  export type PrescriptionCreateNestedManyWithoutPatientMedicationInput = {
    create?: XOR<PrescriptionCreateWithoutPatientMedicationInput, PrescriptionUncheckedCreateWithoutPatientMedicationInput> | PrescriptionCreateWithoutPatientMedicationInput[] | PrescriptionUncheckedCreateWithoutPatientMedicationInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientMedicationInput | PrescriptionCreateOrConnectWithoutPatientMedicationInput[]
    createMany?: PrescriptionCreateManyPatientMedicationInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutPatientMedicationInput = {
    create?: XOR<PrescriptionCreateWithoutPatientMedicationInput, PrescriptionUncheckedCreateWithoutPatientMedicationInput> | PrescriptionCreateWithoutPatientMedicationInput[] | PrescriptionUncheckedCreateWithoutPatientMedicationInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientMedicationInput | PrescriptionCreateOrConnectWithoutPatientMedicationInput[]
    createMany?: PrescriptionCreateManyPatientMedicationInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type PatientUpdateOneRequiredWithoutPatientMedicationNestedInput = {
    create?: XOR<PatientCreateWithoutPatientMedicationInput, PatientUncheckedCreateWithoutPatientMedicationInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPatientMedicationInput
    upsert?: PatientUpsertWithoutPatientMedicationInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutPatientMedicationInput, PatientUpdateWithoutPatientMedicationInput>, PatientUncheckedUpdateWithoutPatientMedicationInput>
  }

  export type DoctorUpdateOneRequiredWithoutPatientMedicationNestedInput = {
    create?: XOR<DoctorCreateWithoutPatientMedicationInput, DoctorUncheckedCreateWithoutPatientMedicationInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutPatientMedicationInput
    upsert?: DoctorUpsertWithoutPatientMedicationInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutPatientMedicationInput, DoctorUpdateWithoutPatientMedicationInput>, DoctorUncheckedUpdateWithoutPatientMedicationInput>
  }

  export type PrescriptionUpdateManyWithoutPatientMedicationNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPatientMedicationInput, PrescriptionUncheckedCreateWithoutPatientMedicationInput> | PrescriptionCreateWithoutPatientMedicationInput[] | PrescriptionUncheckedCreateWithoutPatientMedicationInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientMedicationInput | PrescriptionCreateOrConnectWithoutPatientMedicationInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutPatientMedicationInput | PrescriptionUpsertWithWhereUniqueWithoutPatientMedicationInput[]
    createMany?: PrescriptionCreateManyPatientMedicationInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutPatientMedicationInput | PrescriptionUpdateWithWhereUniqueWithoutPatientMedicationInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutPatientMedicationInput | PrescriptionUpdateManyWithWhereWithoutPatientMedicationInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type PrescriptionUncheckedUpdateManyWithoutPatientMedicationNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPatientMedicationInput, PrescriptionUncheckedCreateWithoutPatientMedicationInput> | PrescriptionCreateWithoutPatientMedicationInput[] | PrescriptionUncheckedCreateWithoutPatientMedicationInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientMedicationInput | PrescriptionCreateOrConnectWithoutPatientMedicationInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutPatientMedicationInput | PrescriptionUpsertWithWhereUniqueWithoutPatientMedicationInput[]
    createMany?: PrescriptionCreateManyPatientMedicationInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutPatientMedicationInput | PrescriptionUpdateWithWhereUniqueWithoutPatientMedicationInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutPatientMedicationInput | PrescriptionUpdateManyWithWhereWithoutPatientMedicationInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type MedicalRecordCreateNestedOneWithoutLabTestsInput = {
    create?: XOR<MedicalRecordCreateWithoutLabTestsInput, MedicalRecordUncheckedCreateWithoutLabTestsInput>
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutLabTestsInput
    connect?: MedicalRecordWhereUniqueInput
  }

  export type EnumLabStatusFieldUpdateOperationsInput = {
    set?: $Enums.LabStatus
  }

  export type MedicalRecordUpdateOneRequiredWithoutLabTestsNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutLabTestsInput, MedicalRecordUncheckedCreateWithoutLabTestsInput>
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutLabTestsInput
    upsert?: MedicalRecordUpsertWithoutLabTestsInput
    connect?: MedicalRecordWhereUniqueInput
    update?: XOR<XOR<MedicalRecordUpdateToOneWithWhereWithoutLabTestsInput, MedicalRecordUpdateWithoutLabTestsInput>, MedicalRecordUncheckedUpdateWithoutLabTestsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumMedicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MedicationStatus | EnumMedicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MedicationStatus[] | ListEnumMedicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MedicationStatus[] | ListEnumMedicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMedicationStatusFilter<$PrismaModel> | $Enums.MedicationStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumMedicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MedicationStatus | EnumMedicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MedicationStatus[] | ListEnumMedicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MedicationStatus[] | ListEnumMedicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMedicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.MedicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMedicationStatusFilter<$PrismaModel>
    _max?: NestedEnumMedicationStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumLabStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LabStatus | EnumLabStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LabStatus[] | ListEnumLabStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LabStatus[] | ListEnumLabStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLabStatusFilter<$PrismaModel> | $Enums.LabStatus
  }

  export type NestedEnumLabStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LabStatus | EnumLabStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LabStatus[] | ListEnumLabStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LabStatus[] | ListEnumLabStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLabStatusWithAggregatesFilter<$PrismaModel> | $Enums.LabStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLabStatusFilter<$PrismaModel>
    _max?: NestedEnumLabStatusFilter<$PrismaModel>
  }

  export type PatientCreateWithoutDoctorInput = {
    fullName: string
    dateOfBirth: Date | string
    gender: string
    phone: string
    address: string
    emergencyContact: string
    insuranceDetails?: string | null
    user: UserCreateNestedOneWithoutPatientProfileInput
    records?: MedicalRecordCreateNestedManyWithoutPatientInput
    patientMedication?: PatientMedicationCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutDoctorInput = {
    userId: string
    fullName: string
    dateOfBirth: Date | string
    gender: string
    phone: string
    address: string
    emergencyContact: string
    insuranceDetails?: string | null
    records?: MedicalRecordUncheckedCreateNestedManyWithoutPatientInput
    patientMedication?: PatientMedicationUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutDoctorInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutDoctorInput, PatientUncheckedCreateWithoutDoctorInput>
  }

  export type PatientCreateManyDoctorInputEnvelope = {
    data: PatientCreateManyDoctorInput | PatientCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type PatientCreateWithoutUserInput = {
    fullName: string
    dateOfBirth: Date | string
    gender: string
    phone: string
    address: string
    emergencyContact: string
    insuranceDetails?: string | null
    doctor: UserCreateNestedOneWithoutPatientsInput
    records?: MedicalRecordCreateNestedManyWithoutPatientInput
    patientMedication?: PatientMedicationCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutUserInput = {
    fullName: string
    dateOfBirth: Date | string
    gender: string
    phone: string
    address: string
    emergencyContact: string
    insuranceDetails?: string | null
    doctorId: string
    records?: MedicalRecordUncheckedCreateNestedManyWithoutPatientInput
    patientMedication?: PatientMedicationUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutUserInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
  }

  export type DoctorCreateWithoutUserInput = {
    specialization: string
    patientMedication?: PatientMedicationCreateNestedManyWithoutPrescribedByInput
    medicalRecords?: MedicalRecordCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutUserInput = {
    specialization: string
    patientMedication?: PatientMedicationUncheckedCreateNestedManyWithoutPrescribedByInput
    medicalRecords?: MedicalRecordUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutUserInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
  }

  export type NurseCreateWithoutUserInput = {
    shift: string
    department: string
  }

  export type NurseUncheckedCreateWithoutUserInput = {
    shift: string
    department: string
  }

  export type NurseCreateOrConnectWithoutUserInput = {
    where: NurseWhereUniqueInput
    create: XOR<NurseCreateWithoutUserInput, NurseUncheckedCreateWithoutUserInput>
  }

  export type AdminCreateWithoutUserInput = {
    permissions: string
  }

  export type AdminUncheckedCreateWithoutUserInput = {
    permissions: string
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type PatientUpsertWithWhereUniqueWithoutDoctorInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutDoctorInput, PatientUncheckedUpdateWithoutDoctorInput>
    create: XOR<PatientCreateWithoutDoctorInput, PatientUncheckedCreateWithoutDoctorInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutDoctorInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutDoctorInput, PatientUncheckedUpdateWithoutDoctorInput>
  }

  export type PatientUpdateManyWithWhereWithoutDoctorInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutDoctorInput>
  }

  export type PatientScalarWhereInput = {
    AND?: PatientScalarWhereInput | PatientScalarWhereInput[]
    OR?: PatientScalarWhereInput[]
    NOT?: PatientScalarWhereInput | PatientScalarWhereInput[]
    userId?: StringFilter<"Patient"> | string
    fullName?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeFilter<"Patient"> | Date | string
    gender?: StringFilter<"Patient"> | string
    phone?: StringFilter<"Patient"> | string
    address?: StringFilter<"Patient"> | string
    emergencyContact?: StringFilter<"Patient"> | string
    insuranceDetails?: StringNullableFilter<"Patient"> | string | null
    doctorId?: StringFilter<"Patient"> | string
  }

  export type PatientUpsertWithoutUserInput = {
    update: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutUserInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
  }

  export type PatientUpdateWithoutUserInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    insuranceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: UserUpdateOneRequiredWithoutPatientsNestedInput
    records?: MedicalRecordUpdateManyWithoutPatientNestedInput
    patientMedication?: PatientMedicationUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutUserInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    insuranceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: StringFieldUpdateOperationsInput | string
    records?: MedicalRecordUncheckedUpdateManyWithoutPatientNestedInput
    patientMedication?: PatientMedicationUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorUpsertWithoutUserInput = {
    update: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutUserInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUpdateWithoutUserInput = {
    specialization?: StringFieldUpdateOperationsInput | string
    patientMedication?: PatientMedicationUpdateManyWithoutPrescribedByNestedInput
    medicalRecords?: MedicalRecordUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutUserInput = {
    specialization?: StringFieldUpdateOperationsInput | string
    patientMedication?: PatientMedicationUncheckedUpdateManyWithoutPrescribedByNestedInput
    medicalRecords?: MedicalRecordUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type NurseUpsertWithoutUserInput = {
    update: XOR<NurseUpdateWithoutUserInput, NurseUncheckedUpdateWithoutUserInput>
    create: XOR<NurseCreateWithoutUserInput, NurseUncheckedCreateWithoutUserInput>
    where?: NurseWhereInput
  }

  export type NurseUpdateToOneWithWhereWithoutUserInput = {
    where?: NurseWhereInput
    data: XOR<NurseUpdateWithoutUserInput, NurseUncheckedUpdateWithoutUserInput>
  }

  export type NurseUpdateWithoutUserInput = {
    shift?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type NurseUncheckedUpdateWithoutUserInput = {
    shift?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUpsertWithoutUserInput = {
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutUserInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateWithoutUserInput = {
    permissions?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    permissions?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutPatientsInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    createdAt?: Date | string
    patientProfile?: PatientCreateNestedOneWithoutUserInput
    doctor?: DoctorCreateNestedOneWithoutUserInput
    nurse?: NurseCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPatientsInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    createdAt?: Date | string
    patientProfile?: PatientUncheckedCreateNestedOneWithoutUserInput
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    nurse?: NurseUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPatientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
  }

  export type UserCreateWithoutPatientProfileInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    createdAt?: Date | string
    patients?: PatientCreateNestedManyWithoutDoctorInput
    doctor?: DoctorCreateNestedOneWithoutUserInput
    nurse?: NurseCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPatientProfileInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    createdAt?: Date | string
    patients?: PatientUncheckedCreateNestedManyWithoutDoctorInput
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    nurse?: NurseUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPatientProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientProfileInput, UserUncheckedCreateWithoutPatientProfileInput>
  }

  export type MedicalRecordCreateWithoutPatientInput = {
    id?: string
    diagnosis: string
    notes?: string | null
    createdAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutMedicalRecordsInput
    prescriptions?: PrescriptionCreateNestedManyWithoutMedicalRecordInput
    labTests?: LabTestCreateNestedManyWithoutMedicalRecordInput
  }

  export type MedicalRecordUncheckedCreateWithoutPatientInput = {
    id?: string
    diagnosis: string
    notes?: string | null
    createdAt?: Date | string
    doctorId: string
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutMedicalRecordInput
    labTests?: LabTestUncheckedCreateNestedManyWithoutMedicalRecordInput
  }

  export type MedicalRecordCreateOrConnectWithoutPatientInput = {
    where: MedicalRecordWhereUniqueInput
    create: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput>
  }

  export type MedicalRecordCreateManyPatientInputEnvelope = {
    data: MedicalRecordCreateManyPatientInput | MedicalRecordCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type PatientMedicationCreateWithoutPatientInput = {
    id?: string
    prescribedByName: string
    name: string
    dosage: string
    frequency: string
    route: string
    startDate: Date | string
    endDate?: Date | string | null
    status: string
    instructions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prescribedBy: DoctorCreateNestedOneWithoutPatientMedicationInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPatientMedicationInput
  }

  export type PatientMedicationUncheckedCreateWithoutPatientInput = {
    id?: string
    prescribedById: string
    prescribedByName: string
    name: string
    dosage: string
    frequency: string
    route: string
    startDate: Date | string
    endDate?: Date | string | null
    status: string
    instructions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPatientMedicationInput
  }

  export type PatientMedicationCreateOrConnectWithoutPatientInput = {
    where: PatientMedicationWhereUniqueInput
    create: XOR<PatientMedicationCreateWithoutPatientInput, PatientMedicationUncheckedCreateWithoutPatientInput>
  }

  export type PatientMedicationCreateManyPatientInputEnvelope = {
    data: PatientMedicationCreateManyPatientInput | PatientMedicationCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPatientsInput = {
    update: XOR<UserUpdateWithoutPatientsInput, UserUncheckedUpdateWithoutPatientsInput>
    create: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientsInput, UserUncheckedUpdateWithoutPatientsInput>
  }

  export type UserUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientProfile?: PatientUpdateOneWithoutUserNestedInput
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    nurse?: NurseUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientProfile?: PatientUncheckedUpdateOneWithoutUserNestedInput
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    nurse?: NurseUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpsertWithoutPatientProfileInput = {
    update: XOR<UserUpdateWithoutPatientProfileInput, UserUncheckedUpdateWithoutPatientProfileInput>
    create: XOR<UserCreateWithoutPatientProfileInput, UserUncheckedCreateWithoutPatientProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientProfileInput, UserUncheckedUpdateWithoutPatientProfileInput>
  }

  export type UserUpdateWithoutPatientProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUpdateManyWithoutDoctorNestedInput
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    nurse?: NurseUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUncheckedUpdateManyWithoutDoctorNestedInput
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    nurse?: NurseUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type MedicalRecordUpsertWithWhereUniqueWithoutPatientInput = {
    where: MedicalRecordWhereUniqueInput
    update: XOR<MedicalRecordUpdateWithoutPatientInput, MedicalRecordUncheckedUpdateWithoutPatientInput>
    create: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput>
  }

  export type MedicalRecordUpdateWithWhereUniqueWithoutPatientInput = {
    where: MedicalRecordWhereUniqueInput
    data: XOR<MedicalRecordUpdateWithoutPatientInput, MedicalRecordUncheckedUpdateWithoutPatientInput>
  }

  export type MedicalRecordUpdateManyWithWhereWithoutPatientInput = {
    where: MedicalRecordScalarWhereInput
    data: XOR<MedicalRecordUpdateManyMutationInput, MedicalRecordUncheckedUpdateManyWithoutPatientInput>
  }

  export type MedicalRecordScalarWhereInput = {
    AND?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
    OR?: MedicalRecordScalarWhereInput[]
    NOT?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
    id?: StringFilter<"MedicalRecord"> | string
    diagnosis?: StringFilter<"MedicalRecord"> | string
    notes?: StringNullableFilter<"MedicalRecord"> | string | null
    createdAt?: DateTimeFilter<"MedicalRecord"> | Date | string
    patientId?: StringFilter<"MedicalRecord"> | string
    doctorId?: StringFilter<"MedicalRecord"> | string
  }

  export type PatientMedicationUpsertWithWhereUniqueWithoutPatientInput = {
    where: PatientMedicationWhereUniqueInput
    update: XOR<PatientMedicationUpdateWithoutPatientInput, PatientMedicationUncheckedUpdateWithoutPatientInput>
    create: XOR<PatientMedicationCreateWithoutPatientInput, PatientMedicationUncheckedCreateWithoutPatientInput>
  }

  export type PatientMedicationUpdateWithWhereUniqueWithoutPatientInput = {
    where: PatientMedicationWhereUniqueInput
    data: XOR<PatientMedicationUpdateWithoutPatientInput, PatientMedicationUncheckedUpdateWithoutPatientInput>
  }

  export type PatientMedicationUpdateManyWithWhereWithoutPatientInput = {
    where: PatientMedicationScalarWhereInput
    data: XOR<PatientMedicationUpdateManyMutationInput, PatientMedicationUncheckedUpdateManyWithoutPatientInput>
  }

  export type PatientMedicationScalarWhereInput = {
    AND?: PatientMedicationScalarWhereInput | PatientMedicationScalarWhereInput[]
    OR?: PatientMedicationScalarWhereInput[]
    NOT?: PatientMedicationScalarWhereInput | PatientMedicationScalarWhereInput[]
    id?: StringFilter<"PatientMedication"> | string
    patientId?: StringFilter<"PatientMedication"> | string
    prescribedById?: StringFilter<"PatientMedication"> | string
    prescribedByName?: StringFilter<"PatientMedication"> | string
    name?: StringFilter<"PatientMedication"> | string
    dosage?: StringFilter<"PatientMedication"> | string
    frequency?: StringFilter<"PatientMedication"> | string
    route?: StringFilter<"PatientMedication"> | string
    startDate?: DateTimeFilter<"PatientMedication"> | Date | string
    endDate?: DateTimeNullableFilter<"PatientMedication"> | Date | string | null
    status?: StringFilter<"PatientMedication"> | string
    instructions?: StringNullableFilter<"PatientMedication"> | string | null
    createdAt?: DateTimeFilter<"PatientMedication"> | Date | string
    updatedAt?: DateTimeFilter<"PatientMedication"> | Date | string
  }

  export type UserCreateWithoutDoctorInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    createdAt?: Date | string
    patients?: PatientCreateNestedManyWithoutDoctorInput
    patientProfile?: PatientCreateNestedOneWithoutUserInput
    nurse?: NurseCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDoctorInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    createdAt?: Date | string
    patients?: PatientUncheckedCreateNestedManyWithoutDoctorInput
    patientProfile?: PatientUncheckedCreateNestedOneWithoutUserInput
    nurse?: NurseUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDoctorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
  }

  export type PatientMedicationCreateWithoutPrescribedByInput = {
    id?: string
    prescribedByName: string
    name: string
    dosage: string
    frequency: string
    route: string
    startDate: Date | string
    endDate?: Date | string | null
    status: string
    instructions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutPatientMedicationInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPatientMedicationInput
  }

  export type PatientMedicationUncheckedCreateWithoutPrescribedByInput = {
    id?: string
    patientId: string
    prescribedByName: string
    name: string
    dosage: string
    frequency: string
    route: string
    startDate: Date | string
    endDate?: Date | string | null
    status: string
    instructions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPatientMedicationInput
  }

  export type PatientMedicationCreateOrConnectWithoutPrescribedByInput = {
    where: PatientMedicationWhereUniqueInput
    create: XOR<PatientMedicationCreateWithoutPrescribedByInput, PatientMedicationUncheckedCreateWithoutPrescribedByInput>
  }

  export type PatientMedicationCreateManyPrescribedByInputEnvelope = {
    data: PatientMedicationCreateManyPrescribedByInput | PatientMedicationCreateManyPrescribedByInput[]
    skipDuplicates?: boolean
  }

  export type MedicalRecordCreateWithoutDoctorInput = {
    id?: string
    diagnosis: string
    notes?: string | null
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutRecordsInput
    prescriptions?: PrescriptionCreateNestedManyWithoutMedicalRecordInput
    labTests?: LabTestCreateNestedManyWithoutMedicalRecordInput
  }

  export type MedicalRecordUncheckedCreateWithoutDoctorInput = {
    id?: string
    diagnosis: string
    notes?: string | null
    createdAt?: Date | string
    patientId: string
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutMedicalRecordInput
    labTests?: LabTestUncheckedCreateNestedManyWithoutMedicalRecordInput
  }

  export type MedicalRecordCreateOrConnectWithoutDoctorInput = {
    where: MedicalRecordWhereUniqueInput
    create: XOR<MedicalRecordCreateWithoutDoctorInput, MedicalRecordUncheckedCreateWithoutDoctorInput>
  }

  export type MedicalRecordCreateManyDoctorInputEnvelope = {
    data: MedicalRecordCreateManyDoctorInput | MedicalRecordCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDoctorInput = {
    update: XOR<UserUpdateWithoutDoctorInput, UserUncheckedUpdateWithoutDoctorInput>
    create: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoctorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoctorInput, UserUncheckedUpdateWithoutDoctorInput>
  }

  export type UserUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUpdateManyWithoutDoctorNestedInput
    patientProfile?: PatientUpdateOneWithoutUserNestedInput
    nurse?: NurseUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUncheckedUpdateManyWithoutDoctorNestedInput
    patientProfile?: PatientUncheckedUpdateOneWithoutUserNestedInput
    nurse?: NurseUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PatientMedicationUpsertWithWhereUniqueWithoutPrescribedByInput = {
    where: PatientMedicationWhereUniqueInput
    update: XOR<PatientMedicationUpdateWithoutPrescribedByInput, PatientMedicationUncheckedUpdateWithoutPrescribedByInput>
    create: XOR<PatientMedicationCreateWithoutPrescribedByInput, PatientMedicationUncheckedCreateWithoutPrescribedByInput>
  }

  export type PatientMedicationUpdateWithWhereUniqueWithoutPrescribedByInput = {
    where: PatientMedicationWhereUniqueInput
    data: XOR<PatientMedicationUpdateWithoutPrescribedByInput, PatientMedicationUncheckedUpdateWithoutPrescribedByInput>
  }

  export type PatientMedicationUpdateManyWithWhereWithoutPrescribedByInput = {
    where: PatientMedicationScalarWhereInput
    data: XOR<PatientMedicationUpdateManyMutationInput, PatientMedicationUncheckedUpdateManyWithoutPrescribedByInput>
  }

  export type MedicalRecordUpsertWithWhereUniqueWithoutDoctorInput = {
    where: MedicalRecordWhereUniqueInput
    update: XOR<MedicalRecordUpdateWithoutDoctorInput, MedicalRecordUncheckedUpdateWithoutDoctorInput>
    create: XOR<MedicalRecordCreateWithoutDoctorInput, MedicalRecordUncheckedCreateWithoutDoctorInput>
  }

  export type MedicalRecordUpdateWithWhereUniqueWithoutDoctorInput = {
    where: MedicalRecordWhereUniqueInput
    data: XOR<MedicalRecordUpdateWithoutDoctorInput, MedicalRecordUncheckedUpdateWithoutDoctorInput>
  }

  export type MedicalRecordUpdateManyWithWhereWithoutDoctorInput = {
    where: MedicalRecordScalarWhereInput
    data: XOR<MedicalRecordUpdateManyMutationInput, MedicalRecordUncheckedUpdateManyWithoutDoctorInput>
  }

  export type UserCreateWithoutNurseInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    createdAt?: Date | string
    patients?: PatientCreateNestedManyWithoutDoctorInput
    patientProfile?: PatientCreateNestedOneWithoutUserInput
    doctor?: DoctorCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNurseInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    createdAt?: Date | string
    patients?: PatientUncheckedCreateNestedManyWithoutDoctorInput
    patientProfile?: PatientUncheckedCreateNestedOneWithoutUserInput
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNurseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNurseInput, UserUncheckedCreateWithoutNurseInput>
  }

  export type UserUpsertWithoutNurseInput = {
    update: XOR<UserUpdateWithoutNurseInput, UserUncheckedUpdateWithoutNurseInput>
    create: XOR<UserCreateWithoutNurseInput, UserUncheckedCreateWithoutNurseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNurseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNurseInput, UserUncheckedUpdateWithoutNurseInput>
  }

  export type UserUpdateWithoutNurseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUpdateManyWithoutDoctorNestedInput
    patientProfile?: PatientUpdateOneWithoutUserNestedInput
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNurseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUncheckedUpdateManyWithoutDoctorNestedInput
    patientProfile?: PatientUncheckedUpdateOneWithoutUserNestedInput
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutAdminInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    createdAt?: Date | string
    patients?: PatientCreateNestedManyWithoutDoctorInput
    patientProfile?: PatientCreateNestedOneWithoutUserInput
    doctor?: DoctorCreateNestedOneWithoutUserInput
    nurse?: NurseCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    createdAt?: Date | string
    patients?: PatientUncheckedCreateNestedManyWithoutDoctorInput
    patientProfile?: PatientUncheckedCreateNestedOneWithoutUserInput
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    nurse?: NurseUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type UserUpsertWithoutAdminInput = {
    update: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUpdateManyWithoutDoctorNestedInput
    patientProfile?: PatientUpdateOneWithoutUserNestedInput
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    nurse?: NurseUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUncheckedUpdateManyWithoutDoctorNestedInput
    patientProfile?: PatientUncheckedUpdateOneWithoutUserNestedInput
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    nurse?: NurseUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PatientCreateWithoutRecordsInput = {
    fullName: string
    dateOfBirth: Date | string
    gender: string
    phone: string
    address: string
    emergencyContact: string
    insuranceDetails?: string | null
    doctor: UserCreateNestedOneWithoutPatientsInput
    user: UserCreateNestedOneWithoutPatientProfileInput
    patientMedication?: PatientMedicationCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutRecordsInput = {
    userId: string
    fullName: string
    dateOfBirth: Date | string
    gender: string
    phone: string
    address: string
    emergencyContact: string
    insuranceDetails?: string | null
    doctorId: string
    patientMedication?: PatientMedicationUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutRecordsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutRecordsInput, PatientUncheckedCreateWithoutRecordsInput>
  }

  export type DoctorCreateWithoutMedicalRecordsInput = {
    specialization: string
    user: UserCreateNestedOneWithoutDoctorInput
    patientMedication?: PatientMedicationCreateNestedManyWithoutPrescribedByInput
  }

  export type DoctorUncheckedCreateWithoutMedicalRecordsInput = {
    userId: string
    specialization: string
    patientMedication?: PatientMedicationUncheckedCreateNestedManyWithoutPrescribedByInput
  }

  export type DoctorCreateOrConnectWithoutMedicalRecordsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutMedicalRecordsInput, DoctorUncheckedCreateWithoutMedicalRecordsInput>
  }

  export type PrescriptionCreateWithoutMedicalRecordInput = {
    id?: string
    createdAt?: Date | string
    patientMedication: PatientMedicationCreateNestedOneWithoutPrescriptionsInput
    medication: MedicationInventoryCreateNestedOneWithoutPrescriptionsInput
  }

  export type PrescriptionUncheckedCreateWithoutMedicalRecordInput = {
    id?: string
    patientMedicationId: string
    medicationInventoryId: string
    createdAt?: Date | string
  }

  export type PrescriptionCreateOrConnectWithoutMedicalRecordInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutMedicalRecordInput, PrescriptionUncheckedCreateWithoutMedicalRecordInput>
  }

  export type PrescriptionCreateManyMedicalRecordInputEnvelope = {
    data: PrescriptionCreateManyMedicalRecordInput | PrescriptionCreateManyMedicalRecordInput[]
    skipDuplicates?: boolean
  }

  export type LabTestCreateWithoutMedicalRecordInput = {
    id?: string
    patientId: string
    doctorId: string
    testType: string
    status?: $Enums.LabStatus
    requestedAt?: Date | string
    acceptedAt?: Date | string | null
    result?: string | null
    validatedAt?: Date | string | null
    releasedAt?: Date | string | null
  }

  export type LabTestUncheckedCreateWithoutMedicalRecordInput = {
    id?: string
    patientId: string
    doctorId: string
    testType: string
    status?: $Enums.LabStatus
    requestedAt?: Date | string
    acceptedAt?: Date | string | null
    result?: string | null
    validatedAt?: Date | string | null
    releasedAt?: Date | string | null
  }

  export type LabTestCreateOrConnectWithoutMedicalRecordInput = {
    where: LabTestWhereUniqueInput
    create: XOR<LabTestCreateWithoutMedicalRecordInput, LabTestUncheckedCreateWithoutMedicalRecordInput>
  }

  export type LabTestCreateManyMedicalRecordInputEnvelope = {
    data: LabTestCreateManyMedicalRecordInput | LabTestCreateManyMedicalRecordInput[]
    skipDuplicates?: boolean
  }

  export type PatientUpsertWithoutRecordsInput = {
    update: XOR<PatientUpdateWithoutRecordsInput, PatientUncheckedUpdateWithoutRecordsInput>
    create: XOR<PatientCreateWithoutRecordsInput, PatientUncheckedCreateWithoutRecordsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutRecordsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutRecordsInput, PatientUncheckedUpdateWithoutRecordsInput>
  }

  export type PatientUpdateWithoutRecordsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    insuranceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: UserUpdateOneRequiredWithoutPatientsNestedInput
    user?: UserUpdateOneRequiredWithoutPatientProfileNestedInput
    patientMedication?: PatientMedicationUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutRecordsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    insuranceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: StringFieldUpdateOperationsInput | string
    patientMedication?: PatientMedicationUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorUpsertWithoutMedicalRecordsInput = {
    update: XOR<DoctorUpdateWithoutMedicalRecordsInput, DoctorUncheckedUpdateWithoutMedicalRecordsInput>
    create: XOR<DoctorCreateWithoutMedicalRecordsInput, DoctorUncheckedCreateWithoutMedicalRecordsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutMedicalRecordsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutMedicalRecordsInput, DoctorUncheckedUpdateWithoutMedicalRecordsInput>
  }

  export type DoctorUpdateWithoutMedicalRecordsInput = {
    specialization?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    patientMedication?: PatientMedicationUpdateManyWithoutPrescribedByNestedInput
  }

  export type DoctorUncheckedUpdateWithoutMedicalRecordsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    patientMedication?: PatientMedicationUncheckedUpdateManyWithoutPrescribedByNestedInput
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutMedicalRecordInput, PrescriptionUncheckedUpdateWithoutMedicalRecordInput>
    create: XOR<PrescriptionCreateWithoutMedicalRecordInput, PrescriptionUncheckedCreateWithoutMedicalRecordInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutMedicalRecordInput, PrescriptionUncheckedUpdateWithoutMedicalRecordInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutMedicalRecordInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutMedicalRecordInput>
  }

  export type PrescriptionScalarWhereInput = {
    AND?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
    OR?: PrescriptionScalarWhereInput[]
    NOT?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
    id?: StringFilter<"Prescription"> | string
    patientMedicationId?: StringFilter<"Prescription"> | string
    medicationInventoryId?: StringFilter<"Prescription"> | string
    createdAt?: DateTimeFilter<"Prescription"> | Date | string
    medicalRecordId?: StringFilter<"Prescription"> | string
  }

  export type LabTestUpsertWithWhereUniqueWithoutMedicalRecordInput = {
    where: LabTestWhereUniqueInput
    update: XOR<LabTestUpdateWithoutMedicalRecordInput, LabTestUncheckedUpdateWithoutMedicalRecordInput>
    create: XOR<LabTestCreateWithoutMedicalRecordInput, LabTestUncheckedCreateWithoutMedicalRecordInput>
  }

  export type LabTestUpdateWithWhereUniqueWithoutMedicalRecordInput = {
    where: LabTestWhereUniqueInput
    data: XOR<LabTestUpdateWithoutMedicalRecordInput, LabTestUncheckedUpdateWithoutMedicalRecordInput>
  }

  export type LabTestUpdateManyWithWhereWithoutMedicalRecordInput = {
    where: LabTestScalarWhereInput
    data: XOR<LabTestUpdateManyMutationInput, LabTestUncheckedUpdateManyWithoutMedicalRecordInput>
  }

  export type LabTestScalarWhereInput = {
    AND?: LabTestScalarWhereInput | LabTestScalarWhereInput[]
    OR?: LabTestScalarWhereInput[]
    NOT?: LabTestScalarWhereInput | LabTestScalarWhereInput[]
    id?: StringFilter<"LabTest"> | string
    patientId?: StringFilter<"LabTest"> | string
    doctorId?: StringFilter<"LabTest"> | string
    testType?: StringFilter<"LabTest"> | string
    status?: EnumLabStatusFilter<"LabTest"> | $Enums.LabStatus
    requestedAt?: DateTimeFilter<"LabTest"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"LabTest"> | Date | string | null
    result?: StringNullableFilter<"LabTest"> | string | null
    validatedAt?: DateTimeNullableFilter<"LabTest"> | Date | string | null
    releasedAt?: DateTimeNullableFilter<"LabTest"> | Date | string | null
    medicalRecordId?: StringFilter<"LabTest"> | string
  }

  export type PrescriptionCreateWithoutMedicationInput = {
    id?: string
    createdAt?: Date | string
    medicalRecord: MedicalRecordCreateNestedOneWithoutPrescriptionsInput
    patientMedication: PatientMedicationCreateNestedOneWithoutPrescriptionsInput
  }

  export type PrescriptionUncheckedCreateWithoutMedicationInput = {
    id?: string
    patientMedicationId: string
    createdAt?: Date | string
    medicalRecordId: string
  }

  export type PrescriptionCreateOrConnectWithoutMedicationInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutMedicationInput, PrescriptionUncheckedCreateWithoutMedicationInput>
  }

  export type PrescriptionCreateManyMedicationInputEnvelope = {
    data: PrescriptionCreateManyMedicationInput | PrescriptionCreateManyMedicationInput[]
    skipDuplicates?: boolean
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutMedicationInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutMedicationInput, PrescriptionUncheckedUpdateWithoutMedicationInput>
    create: XOR<PrescriptionCreateWithoutMedicationInput, PrescriptionUncheckedCreateWithoutMedicationInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutMedicationInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutMedicationInput, PrescriptionUncheckedUpdateWithoutMedicationInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutMedicationInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutMedicationInput>
  }

  export type MedicalRecordCreateWithoutPrescriptionsInput = {
    id?: string
    diagnosis: string
    notes?: string | null
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutRecordsInput
    doctor: DoctorCreateNestedOneWithoutMedicalRecordsInput
    labTests?: LabTestCreateNestedManyWithoutMedicalRecordInput
  }

  export type MedicalRecordUncheckedCreateWithoutPrescriptionsInput = {
    id?: string
    diagnosis: string
    notes?: string | null
    createdAt?: Date | string
    patientId: string
    doctorId: string
    labTests?: LabTestUncheckedCreateNestedManyWithoutMedicalRecordInput
  }

  export type MedicalRecordCreateOrConnectWithoutPrescriptionsInput = {
    where: MedicalRecordWhereUniqueInput
    create: XOR<MedicalRecordCreateWithoutPrescriptionsInput, MedicalRecordUncheckedCreateWithoutPrescriptionsInput>
  }

  export type PatientMedicationCreateWithoutPrescriptionsInput = {
    id?: string
    prescribedByName: string
    name: string
    dosage: string
    frequency: string
    route: string
    startDate: Date | string
    endDate?: Date | string | null
    status: string
    instructions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutPatientMedicationInput
    prescribedBy: DoctorCreateNestedOneWithoutPatientMedicationInput
  }

  export type PatientMedicationUncheckedCreateWithoutPrescriptionsInput = {
    id?: string
    patientId: string
    prescribedById: string
    prescribedByName: string
    name: string
    dosage: string
    frequency: string
    route: string
    startDate: Date | string
    endDate?: Date | string | null
    status: string
    instructions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientMedicationCreateOrConnectWithoutPrescriptionsInput = {
    where: PatientMedicationWhereUniqueInput
    create: XOR<PatientMedicationCreateWithoutPrescriptionsInput, PatientMedicationUncheckedCreateWithoutPrescriptionsInput>
  }

  export type MedicationInventoryCreateWithoutPrescriptionsInput = {
    id?: string
    name: string
    form: string
    strength: string
    batchNumber: string
    quantity: number
    reorderLevel: number
    status?: $Enums.MedicationStatus
    supplier?: string | null
    orderDate?: Date | string | null
    arrivalDate?: Date | string | null
    expiryDate?: Date | string | null
    reservedFor?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationInventoryUncheckedCreateWithoutPrescriptionsInput = {
    id?: string
    name: string
    form: string
    strength: string
    batchNumber: string
    quantity: number
    reorderLevel: number
    status?: $Enums.MedicationStatus
    supplier?: string | null
    orderDate?: Date | string | null
    arrivalDate?: Date | string | null
    expiryDate?: Date | string | null
    reservedFor?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationInventoryCreateOrConnectWithoutPrescriptionsInput = {
    where: MedicationInventoryWhereUniqueInput
    create: XOR<MedicationInventoryCreateWithoutPrescriptionsInput, MedicationInventoryUncheckedCreateWithoutPrescriptionsInput>
  }

  export type MedicalRecordUpsertWithoutPrescriptionsInput = {
    update: XOR<MedicalRecordUpdateWithoutPrescriptionsInput, MedicalRecordUncheckedUpdateWithoutPrescriptionsInput>
    create: XOR<MedicalRecordCreateWithoutPrescriptionsInput, MedicalRecordUncheckedCreateWithoutPrescriptionsInput>
    where?: MedicalRecordWhereInput
  }

  export type MedicalRecordUpdateToOneWithWhereWithoutPrescriptionsInput = {
    where?: MedicalRecordWhereInput
    data: XOR<MedicalRecordUpdateWithoutPrescriptionsInput, MedicalRecordUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type MedicalRecordUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutRecordsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutMedicalRecordsNestedInput
    labTests?: LabTestUpdateManyWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordUncheckedUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    labTests?: LabTestUncheckedUpdateManyWithoutMedicalRecordNestedInput
  }

  export type PatientMedicationUpsertWithoutPrescriptionsInput = {
    update: XOR<PatientMedicationUpdateWithoutPrescriptionsInput, PatientMedicationUncheckedUpdateWithoutPrescriptionsInput>
    create: XOR<PatientMedicationCreateWithoutPrescriptionsInput, PatientMedicationUncheckedCreateWithoutPrescriptionsInput>
    where?: PatientMedicationWhereInput
  }

  export type PatientMedicationUpdateToOneWithWhereWithoutPrescriptionsInput = {
    where?: PatientMedicationWhereInput
    data: XOR<PatientMedicationUpdateWithoutPrescriptionsInput, PatientMedicationUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type PatientMedicationUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    prescribedByName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutPatientMedicationNestedInput
    prescribedBy?: DoctorUpdateOneRequiredWithoutPatientMedicationNestedInput
  }

  export type PatientMedicationUncheckedUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    prescribedById?: StringFieldUpdateOperationsInput | string
    prescribedByName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationInventoryUpsertWithoutPrescriptionsInput = {
    update: XOR<MedicationInventoryUpdateWithoutPrescriptionsInput, MedicationInventoryUncheckedUpdateWithoutPrescriptionsInput>
    create: XOR<MedicationInventoryCreateWithoutPrescriptionsInput, MedicationInventoryUncheckedCreateWithoutPrescriptionsInput>
    where?: MedicationInventoryWhereInput
  }

  export type MedicationInventoryUpdateToOneWithWhereWithoutPrescriptionsInput = {
    where?: MedicationInventoryWhereInput
    data: XOR<MedicationInventoryUpdateWithoutPrescriptionsInput, MedicationInventoryUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type MedicationInventoryUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    form?: StringFieldUpdateOperationsInput | string
    strength?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    reorderLevel?: IntFieldUpdateOperationsInput | number
    status?: EnumMedicationStatusFieldUpdateOperationsInput | $Enums.MedicationStatus
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservedFor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationInventoryUncheckedUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    form?: StringFieldUpdateOperationsInput | string
    strength?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    reorderLevel?: IntFieldUpdateOperationsInput | number
    status?: EnumMedicationStatusFieldUpdateOperationsInput | $Enums.MedicationStatus
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservedFor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateWithoutPatientMedicationInput = {
    fullName: string
    dateOfBirth: Date | string
    gender: string
    phone: string
    address: string
    emergencyContact: string
    insuranceDetails?: string | null
    doctor: UserCreateNestedOneWithoutPatientsInput
    user: UserCreateNestedOneWithoutPatientProfileInput
    records?: MedicalRecordCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutPatientMedicationInput = {
    userId: string
    fullName: string
    dateOfBirth: Date | string
    gender: string
    phone: string
    address: string
    emergencyContact: string
    insuranceDetails?: string | null
    doctorId: string
    records?: MedicalRecordUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutPatientMedicationInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutPatientMedicationInput, PatientUncheckedCreateWithoutPatientMedicationInput>
  }

  export type DoctorCreateWithoutPatientMedicationInput = {
    specialization: string
    user: UserCreateNestedOneWithoutDoctorInput
    medicalRecords?: MedicalRecordCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutPatientMedicationInput = {
    userId: string
    specialization: string
    medicalRecords?: MedicalRecordUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutPatientMedicationInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutPatientMedicationInput, DoctorUncheckedCreateWithoutPatientMedicationInput>
  }

  export type PrescriptionCreateWithoutPatientMedicationInput = {
    id?: string
    createdAt?: Date | string
    medicalRecord: MedicalRecordCreateNestedOneWithoutPrescriptionsInput
    medication: MedicationInventoryCreateNestedOneWithoutPrescriptionsInput
  }

  export type PrescriptionUncheckedCreateWithoutPatientMedicationInput = {
    id?: string
    medicationInventoryId: string
    createdAt?: Date | string
    medicalRecordId: string
  }

  export type PrescriptionCreateOrConnectWithoutPatientMedicationInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutPatientMedicationInput, PrescriptionUncheckedCreateWithoutPatientMedicationInput>
  }

  export type PrescriptionCreateManyPatientMedicationInputEnvelope = {
    data: PrescriptionCreateManyPatientMedicationInput | PrescriptionCreateManyPatientMedicationInput[]
    skipDuplicates?: boolean
  }

  export type PatientUpsertWithoutPatientMedicationInput = {
    update: XOR<PatientUpdateWithoutPatientMedicationInput, PatientUncheckedUpdateWithoutPatientMedicationInput>
    create: XOR<PatientCreateWithoutPatientMedicationInput, PatientUncheckedCreateWithoutPatientMedicationInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutPatientMedicationInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutPatientMedicationInput, PatientUncheckedUpdateWithoutPatientMedicationInput>
  }

  export type PatientUpdateWithoutPatientMedicationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    insuranceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: UserUpdateOneRequiredWithoutPatientsNestedInput
    user?: UserUpdateOneRequiredWithoutPatientProfileNestedInput
    records?: MedicalRecordUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutPatientMedicationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    insuranceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: StringFieldUpdateOperationsInput | string
    records?: MedicalRecordUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorUpsertWithoutPatientMedicationInput = {
    update: XOR<DoctorUpdateWithoutPatientMedicationInput, DoctorUncheckedUpdateWithoutPatientMedicationInput>
    create: XOR<DoctorCreateWithoutPatientMedicationInput, DoctorUncheckedCreateWithoutPatientMedicationInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutPatientMedicationInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutPatientMedicationInput, DoctorUncheckedUpdateWithoutPatientMedicationInput>
  }

  export type DoctorUpdateWithoutPatientMedicationInput = {
    specialization?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    medicalRecords?: MedicalRecordUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutPatientMedicationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    medicalRecords?: MedicalRecordUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutPatientMedicationInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutPatientMedicationInput, PrescriptionUncheckedUpdateWithoutPatientMedicationInput>
    create: XOR<PrescriptionCreateWithoutPatientMedicationInput, PrescriptionUncheckedCreateWithoutPatientMedicationInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutPatientMedicationInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutPatientMedicationInput, PrescriptionUncheckedUpdateWithoutPatientMedicationInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutPatientMedicationInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutPatientMedicationInput>
  }

  export type MedicalRecordCreateWithoutLabTestsInput = {
    id?: string
    diagnosis: string
    notes?: string | null
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutRecordsInput
    doctor: DoctorCreateNestedOneWithoutMedicalRecordsInput
    prescriptions?: PrescriptionCreateNestedManyWithoutMedicalRecordInput
  }

  export type MedicalRecordUncheckedCreateWithoutLabTestsInput = {
    id?: string
    diagnosis: string
    notes?: string | null
    createdAt?: Date | string
    patientId: string
    doctorId: string
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutMedicalRecordInput
  }

  export type MedicalRecordCreateOrConnectWithoutLabTestsInput = {
    where: MedicalRecordWhereUniqueInput
    create: XOR<MedicalRecordCreateWithoutLabTestsInput, MedicalRecordUncheckedCreateWithoutLabTestsInput>
  }

  export type MedicalRecordUpsertWithoutLabTestsInput = {
    update: XOR<MedicalRecordUpdateWithoutLabTestsInput, MedicalRecordUncheckedUpdateWithoutLabTestsInput>
    create: XOR<MedicalRecordCreateWithoutLabTestsInput, MedicalRecordUncheckedCreateWithoutLabTestsInput>
    where?: MedicalRecordWhereInput
  }

  export type MedicalRecordUpdateToOneWithWhereWithoutLabTestsInput = {
    where?: MedicalRecordWhereInput
    data: XOR<MedicalRecordUpdateWithoutLabTestsInput, MedicalRecordUncheckedUpdateWithoutLabTestsInput>
  }

  export type MedicalRecordUpdateWithoutLabTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutRecordsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutMedicalRecordsNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordUncheckedUpdateWithoutLabTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutMedicalRecordNestedInput
  }

  export type PatientCreateManyDoctorInput = {
    userId: string
    fullName: string
    dateOfBirth: Date | string
    gender: string
    phone: string
    address: string
    emergencyContact: string
    insuranceDetails?: string | null
  }

  export type PatientUpdateWithoutDoctorInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    insuranceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPatientProfileNestedInput
    records?: MedicalRecordUpdateManyWithoutPatientNestedInput
    patientMedication?: PatientMedicationUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutDoctorInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    insuranceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    records?: MedicalRecordUncheckedUpdateManyWithoutPatientNestedInput
    patientMedication?: PatientMedicationUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateManyWithoutDoctorInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    emergencyContact?: StringFieldUpdateOperationsInput | string
    insuranceDetails?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicalRecordCreateManyPatientInput = {
    id?: string
    diagnosis: string
    notes?: string | null
    createdAt?: Date | string
    doctorId: string
  }

  export type PatientMedicationCreateManyPatientInput = {
    id?: string
    prescribedById: string
    prescribedByName: string
    name: string
    dosage: string
    frequency: string
    route: string
    startDate: Date | string
    endDate?: Date | string | null
    status: string
    instructions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalRecordUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutMedicalRecordsNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutMedicalRecordNestedInput
    labTests?: LabTestUpdateManyWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: StringFieldUpdateOperationsInput | string
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutMedicalRecordNestedInput
    labTests?: LabTestUncheckedUpdateManyWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type PatientMedicationUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    prescribedByName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescribedBy?: DoctorUpdateOneRequiredWithoutPatientMedicationNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPatientMedicationNestedInput
  }

  export type PatientMedicationUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    prescribedById?: StringFieldUpdateOperationsInput | string
    prescribedByName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPatientMedicationNestedInput
  }

  export type PatientMedicationUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    prescribedById?: StringFieldUpdateOperationsInput | string
    prescribedByName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientMedicationCreateManyPrescribedByInput = {
    id?: string
    patientId: string
    prescribedByName: string
    name: string
    dosage: string
    frequency: string
    route: string
    startDate: Date | string
    endDate?: Date | string | null
    status: string
    instructions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalRecordCreateManyDoctorInput = {
    id?: string
    diagnosis: string
    notes?: string | null
    createdAt?: Date | string
    patientId: string
  }

  export type PatientMedicationUpdateWithoutPrescribedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    prescribedByName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutPatientMedicationNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPatientMedicationNestedInput
  }

  export type PatientMedicationUncheckedUpdateWithoutPrescribedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    prescribedByName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPatientMedicationNestedInput
  }

  export type PatientMedicationUncheckedUpdateManyWithoutPrescribedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    prescribedByName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalRecordUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutRecordsNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutMedicalRecordNestedInput
    labTests?: LabTestUpdateManyWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: StringFieldUpdateOperationsInput | string
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutMedicalRecordNestedInput
    labTests?: LabTestUncheckedUpdateManyWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: StringFieldUpdateOperationsInput | string
  }

  export type PrescriptionCreateManyMedicalRecordInput = {
    id?: string
    patientMedicationId: string
    medicationInventoryId: string
    createdAt?: Date | string
  }

  export type LabTestCreateManyMedicalRecordInput = {
    id?: string
    patientId: string
    doctorId: string
    testType: string
    status?: $Enums.LabStatus
    requestedAt?: Date | string
    acceptedAt?: Date | string | null
    result?: string | null
    validatedAt?: Date | string | null
    releasedAt?: Date | string | null
  }

  export type PrescriptionUpdateWithoutMedicalRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientMedication?: PatientMedicationUpdateOneRequiredWithoutPrescriptionsNestedInput
    medication?: MedicationInventoryUpdateOneRequiredWithoutPrescriptionsNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutMedicalRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientMedicationId?: StringFieldUpdateOperationsInput | string
    medicationInventoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUncheckedUpdateManyWithoutMedicalRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientMedicationId?: StringFieldUpdateOperationsInput | string
    medicationInventoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabTestUpdateWithoutMedicalRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    status?: EnumLabStatusFieldUpdateOperationsInput | $Enums.LabStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LabTestUncheckedUpdateWithoutMedicalRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    status?: EnumLabStatusFieldUpdateOperationsInput | $Enums.LabStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LabTestUncheckedUpdateManyWithoutMedicalRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    status?: EnumLabStatusFieldUpdateOperationsInput | $Enums.LabStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PrescriptionCreateManyMedicationInput = {
    id?: string
    patientMedicationId: string
    createdAt?: Date | string
    medicalRecordId: string
  }

  export type PrescriptionUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalRecord?: MedicalRecordUpdateOneRequiredWithoutPrescriptionsNestedInput
    patientMedication?: PatientMedicationUpdateOneRequiredWithoutPrescriptionsNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientMedicationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalRecordId?: StringFieldUpdateOperationsInput | string
  }

  export type PrescriptionUncheckedUpdateManyWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientMedicationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalRecordId?: StringFieldUpdateOperationsInput | string
  }

  export type PrescriptionCreateManyPatientMedicationInput = {
    id?: string
    medicationInventoryId: string
    createdAt?: Date | string
    medicalRecordId: string
  }

  export type PrescriptionUpdateWithoutPatientMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalRecord?: MedicalRecordUpdateOneRequiredWithoutPrescriptionsNestedInput
    medication?: MedicationInventoryUpdateOneRequiredWithoutPrescriptionsNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutPatientMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationInventoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalRecordId?: StringFieldUpdateOperationsInput | string
  }

  export type PrescriptionUncheckedUpdateManyWithoutPatientMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationInventoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalRecordId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}