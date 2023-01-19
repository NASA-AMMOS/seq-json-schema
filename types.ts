/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type VariableDeclaration = {
  /**
   * Variable type. Allowed types: FLOAT, INT, STRING, UINT, ENUM.
   */
  type: 'FLOAT' | 'INT' | 'STRING' | 'UINT' | 'ENUM';
  /**
   * User-friendly variable names that will be mapped to FSW variable names. Must begin with a letter and contain only letters, numbers, and underscores.
   */
  name: string;
  /**
   * For enumerated type variables, the name of the corresponding FSW-defined ENUM.
   */
  enum_name?: string;
  /**
   * A list of allowable values for this variable.
   */
  allowable_values?: unknown[];
  /**
   * One or more allowable ranges of values, for FLOAT, INT, or UINT variable types.
   */
  allowable_ranges?: VariableRange[];
  /**
   * The FSW-specified name for this variable that should be used in the translated sequence, in case this must be specified. Used for variables which are specially-handled onboard such as LCS (Last Command Status)
   */
  sc_name?: string;
} & {
  [k: string]: unknown;
} & {
  [k: string]: unknown;
};
/**
 * Sequence steps can be grouped into a request, which can then be shifted or adjusted altogether as part of the request.
 */
export type Request = {
  description?: Description;
  ground_epoch?: GroundEpoch;
  metadata?: Metadata;
  /**
   * Request Name, used for tracking commands back to the original request after ground expansion. Must be unique.
   */
  name: string;
  /**
   * Sequence steps that are part of this request.
   *
   * @minItems 1
   */
  steps: [Step, ...Step[]];
  time?: Time;
  type: 'request';
} & Request1;
/**
 * Description. Can be attached to any sequence step.
 */
export type Description = string;
export type Step = Activate | Command | GroundBlock | GroundEvent | Load;
/**
 * Array of command arguments
 */
export type Args = (string | number | boolean | SymbolArgument | HexArgument)[];
export type Request1 =
  | {
      [k: string]: unknown;
    }
  | {
      [k: string]: unknown;
    };

export interface SeqJson {
  /**
   * Unique identifier
   */
  id: string;
  /**
   * Local variable declarations.
   *
   * @minItems 1
   */
  locals?: [VariableDeclaration, ...VariableDeclaration[]];
  metadata: Metadata;
  /**
   * Parameter variable declarations.
   *
   * @minItems 1
   */
  parameters?: [VariableDeclaration, ...VariableDeclaration[]];
  /**
   * Commands groups into requests
   */
  requests?: Request[];
  /**
   * Sequence steps
   */
  steps?: Step[];
  /**
   * Immediate commands which are interpreted by FSW and not part of any sequence.
   */
  immediate_commands?: ImmediateCommand[];
  /**
   * Hardware commands which are not interpreted by FSW and not part of any sequence.
   */
  hardware_commands?: HardwareCommand[];
  [k: string]: unknown;
}
/**
 * A range of allowable variable values between a defined min and max, inclusive. min and max must be numbers
 */
export interface VariableRange {
  /**
   * Minimum value of the variable, inclusive
   */
  min: number;
  /**
   * Maximum value of the variable, inclusive
   */
  max: number;
}
/**
 * Flexible sequence metadata for any key-value pairs.
 */
export interface Metadata {
  [k: string]: unknown;
}
/**
 * Ground epoch object
 */
export interface GroundEpoch {
  /**
   * Epoch delta given as a duration, start time will be epoch+delta.
   */
  delta?: string;
  /**
   * Name of ground-defined epoch.
   */
  name?: string;
  [k: string]: unknown;
}
/**
 * Activate object
 */
export interface Activate {
  args?: Args;
  description?: Description;
  /**
   * Sequence target engine.
   */
  engine?: number;
  /**
   * Onboard epoch to pass to the sequence for derivation of epoch-relative timetags
   */
  epoch?: string;
  metadata?: Metadata;
  models?: Model[];
  /**
   * Onboard path and filename of sequence to be loaded.
   */
  sequence: string;
  time: Time;
  type: 'activate';
}
/**
 * A step argument referencing a local or global variable, or some other symbolic name known to downstream modeling software (such as CONDITION in SEQGEN)
 */
export interface SymbolArgument {
  /**
   * The symbolic name being referenced.
   */
  symbol: string;
}
/**
 * A step argument containing an unsigned integer in hexadecimal format.
 */
export interface HexArgument {
  /**
   * The hexadecimal integer, as a string prefixed with 0x. Digits A-F must be uppercase.
   */
  hex: string;
}
/**
 * Model object that be included with commands to set variables for modeling purposes only, usually to direct sequence execution down a particular branch during modeling.
 */
export interface Model {
  /**
   * Duration to wait after step time to trigger model change
   */
  offset: string;
  /**
   * Value to set in variable.
   */
  value: string | number | boolean;
  /**
   * Variable to be set in the model
   */
  variable: string;
}
/**
 * Time object
 */
export interface Time {
  /**
   * Relative or absolute time. Required for ABSOLUTE, COMMAND_RELATIVE, and EPOCH_RELATIVE time tags but not COMMAND_COMPLETE.
   */
  tag?: string;
  /**
   * Allowed time types: ABSOLUTE, COMMAND_RELATIVE, EPOCH_RELATIVE, or COMMAND_COMPLETE.
   */
  type: 'ABSOLUTE' | 'COMMAND_RELATIVE' | 'EPOCH_RELATIVE' | 'COMMAND_COMPLETE';
}
/**
 * Command object
 */
export interface Command {
  args: Args;
  description?: Description;
  metadata?: Metadata;
  models?: Model[];
  /**
   * Command stem
   */
  stem: string;
  time: Time;
  type: 'command';
  /**
   * Name of a defined local variable to which the exit status of this command should be written to. For this to work, that local variable must have been defined with the 'SC_Name' property set to LCS
   */
  return_assign_to?: string;
}
/**
 * Ground blocks
 */
export interface GroundBlock {
  args?: Args;
  description?: Description;
  metadata?: Metadata;
  models?: Model[];
  /**
   * Ground block name
   */
  name: string;
  time: Time;
  type: 'ground_block';
}
/**
 * Ground events
 */
export interface GroundEvent {
  args?: Args;
  description?: Description;
  metadata?: Metadata;
  models?: Model[];
  /**
   * Ground event name
   */
  name: string;
  time: Time;
  type: 'ground_event';
}
/**
 * Load object
 */
export interface Load {
  args?: Args;
  description?: Description;
  /**
   * Sequence target engine.
   */
  engine?: number;
  /**
   * Onboard epoch to pass to the sequence for derivation of epoch-relative timetags
   */
  epoch?: string;
  metadata?: Metadata;
  models?: Model[];
  /**
   * Onboard path and filename of sequence to be loaded.
   */
  sequence: string;
  time: Time;
  type: 'load';
}
/**
 * Object representing a single Immediate Command
 */
export interface ImmediateCommand {
  args: Args;
  description?: Description;
  metadata?: Metadata;
  /**
   * Command stem
   */
  stem: string;
}
/**
 * Object representing a single Hardware Command
 */
export interface HardwareCommand {
  description?: Description;
  metadata?: Metadata;
  /**
   * Command stem
   */
  stem: string;
}