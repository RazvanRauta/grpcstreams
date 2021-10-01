// package: main
// file: service.proto

import * as jspb from "google-protobuf";

export class HardwareStats extends jspb.Message {
  getCpu(): number;
  setCpu(value: number): void;

  getMemoryFree(): number;
  setMemoryFree(value: number): void;

  getMemoryUsed(): number;
  setMemoryUsed(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HardwareStats.AsObject;
  static toObject(includeInstance: boolean, msg: HardwareStats): HardwareStats.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HardwareStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HardwareStats;
  static deserializeBinaryFromReader(message: HardwareStats, reader: jspb.BinaryReader): HardwareStats;
}

export namespace HardwareStats {
  export type AsObject = {
    cpu: number,
    memoryFree: number,
    memoryUsed: number,
  }
}

export class EmptyRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyRequest): EmptyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmptyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyRequest;
  static deserializeBinaryFromReader(message: EmptyRequest, reader: jspb.BinaryReader): EmptyRequest;
}

export namespace EmptyRequest {
  export type AsObject = {
  }
}

