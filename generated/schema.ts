// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Draw extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Draw entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Draw entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Draw", id.toString(), this);
  }

  static load(id: string): Draw | null {
    return store.get("Draw", id) as Draw | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get drawId(): BigInt {
    let value = this.get("drawId");
    return value.toBigInt();
  }

  set drawId(value: BigInt) {
    this.set("drawId", Value.fromBigInt(value));
  }

  get feeBeneficiary(): Bytes | null {
    let value = this.get("feeBeneficiary");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set feeBeneficiary(value: Bytes | null) {
    if (value === null) {
      this.unset("feeBeneficiary");
    } else {
      this.set("feeBeneficiary", Value.fromBytes(value as Bytes));
    }
  }

  get secretHash(): Bytes | null {
    let value = this.get("secretHash");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set secretHash(value: Bytes | null) {
    if (value === null) {
      this.unset("secretHash");
    } else {
      this.set("secretHash", Value.fromBytes(value as Bytes));
    }
  }

  get feeFraction(): BigInt | null {
    let value = this.get("feeFraction");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set feeFraction(value: BigInt | null) {
    if (value === null) {
      this.unset("feeFraction");
    } else {
      this.set("feeFraction", Value.fromBigInt(value as BigInt));
    }
  }

  get winner(): Bytes | null {
    let value = this.get("winner");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set winner(value: Bytes | null) {
    if (value === null) {
      this.unset("winner");
    } else {
      this.set("winner", Value.fromBytes(value as Bytes));
    }
  }

  get entropy(): Bytes | null {
    let value = this.get("entropy");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set entropy(value: Bytes | null) {
    if (value === null) {
      this.unset("entropy");
    } else {
      this.set("entropy", Value.fromBytes(value as Bytes));
    }
  }

  get winnings(): BigInt | null {
    let value = this.get("winnings");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set winnings(value: BigInt | null) {
    if (value === null) {
      this.unset("winnings");
    } else {
      this.set("winnings", Value.fromBigInt(value as BigInt));
    }
  }

  get fee(): BigInt | null {
    let value = this.get("fee");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set fee(value: BigInt | null) {
    if (value === null) {
      this.unset("fee");
    } else {
      this.set("fee", Value.fromBigInt(value as BigInt));
    }
  }

  get state(): string | null {
    let value = this.get("state");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set state(value: string | null) {
    if (value === null) {
      this.unset("state");
    } else {
      this.set("state", Value.fromString(value as string));
    }
  }

  get poolContract(): string {
    let value = this.get("poolContract");
    return value.toString();
  }

  set poolContract(value: string) {
    this.set("poolContract", Value.fromString(value));
  }

  get openedAt(): BigInt {
    let value = this.get("openedAt");
    return value.toBigInt();
  }

  set openedAt(value: BigInt) {
    this.set("openedAt", Value.fromBigInt(value));
  }

  get committedAt(): BigInt {
    let value = this.get("committedAt");
    return value.toBigInt();
  }

  set committedAt(value: BigInt) {
    this.set("committedAt", Value.fromBigInt(value));
  }

  get rewardedAt(): BigInt {
    let value = this.get("rewardedAt");
    return value.toBigInt();
  }

  set rewardedAt(value: BigInt) {
    this.set("rewardedAt", Value.fromBigInt(value));
  }

  get openedAtBlock(): BigInt {
    let value = this.get("openedAtBlock");
    return value.toBigInt();
  }

  set openedAtBlock(value: BigInt) {
    this.set("openedAtBlock", Value.fromBigInt(value));
  }

  get committedAtBlock(): BigInt {
    let value = this.get("committedAtBlock");
    return value.toBigInt();
  }

  set committedAtBlock(value: BigInt) {
    this.set("committedAtBlock", Value.fromBigInt(value));
  }

  get rewardedAtBlock(): BigInt {
    let value = this.get("rewardedAtBlock");
    return value.toBigInt();
  }

  set rewardedAtBlock(value: BigInt) {
    this.set("rewardedAtBlock", Value.fromBigInt(value));
  }

  get balance(): BigInt | null {
    let value = this.get("balance");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set balance(value: BigInt | null) {
    if (value === null) {
      this.unset("balance");
    } else {
      this.set("balance", Value.fromBigInt(value as BigInt));
    }
  }

  get version(): BigInt {
    let value = this.get("version");
    return value.toBigInt();
  }

  set version(value: BigInt) {
    this.set("version", Value.fromBigInt(value));
  }
}

export class Player extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Player entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Player entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Player", id.toString(), this);
  }

  static load(id: string): Player | null {
    return store.get("Player", id) as Player | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get poolContract(): string {
    let value = this.get("poolContract");
    return value.toString();
  }

  set poolContract(value: string) {
    this.set("poolContract", Value.fromString(value));
  }

  get consolidatedBalance(): BigInt {
    let value = this.get("consolidatedBalance");
    return value.toBigInt();
  }

  set consolidatedBalance(value: BigInt) {
    this.set("consolidatedBalance", Value.fromBigInt(value));
  }

  get firstDepositDrawId(): BigInt {
    let value = this.get("firstDepositDrawId");
    return value.toBigInt();
  }

  set firstDepositDrawId(value: BigInt) {
    this.set("firstDepositDrawId", Value.fromBigInt(value));
  }

  get latestBalance(): BigInt {
    let value = this.get("latestBalance");
    return value.toBigInt();
  }

  set latestBalance(value: BigInt) {
    this.set("latestBalance", Value.fromBigInt(value));
  }

  get latestDrawId(): BigInt {
    let value = this.get("latestDrawId");
    return value.toBigInt();
  }

  set latestDrawId(value: BigInt) {
    this.set("latestDrawId", Value.fromBigInt(value));
  }

  get winnings(): BigInt {
    let value = this.get("winnings");
    return value.toBigInt();
  }

  set winnings(value: BigInt) {
    this.set("winnings", Value.fromBigInt(value));
  }

  get version(): BigInt {
    let value = this.get("version");
    return value.toBigInt();
  }

  set version(value: BigInt) {
    this.set("version", Value.fromBigInt(value));
  }
}

export class Pod extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Pod entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Pod entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Pod", id.toString(), this);
  }

  static load(id: string): Pod | null {
    return store.get("Pod", id) as Pod | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get podPlayers(): Array<string> {
    let value = this.get("podPlayers");
    return value.toStringArray();
  }

  set podPlayers(value: Array<string>) {
    this.set("podPlayers", Value.fromStringArray(value));
  }

  get collateralizationEvents(): Array<string> {
    let value = this.get("collateralizationEvents");
    return value.toStringArray();
  }

  set collateralizationEvents(value: Array<string>) {
    this.set("collateralizationEvents", Value.fromStringArray(value));
  }

  get podPlayersCount(): BigInt | null {
    let value = this.get("podPlayersCount");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set podPlayersCount(value: BigInt | null) {
    if (value === null) {
      this.unset("podPlayersCount");
    } else {
      this.set("podPlayersCount", Value.fromBigInt(value as BigInt));
    }
  }

  get currentExchangeRateMantissa(): BigInt {
    let value = this.get("currentExchangeRateMantissa");
    return value.toBigInt();
  }

  set currentExchangeRateMantissa(value: BigInt) {
    this.set("currentExchangeRateMantissa", Value.fromBigInt(value));
  }

  get balanceUnderlying(): BigInt {
    let value = this.get("balanceUnderlying");
    return value.toBigInt();
  }

  set balanceUnderlying(value: BigInt) {
    this.set("balanceUnderlying", Value.fromBigInt(value));
  }

  get totalPendingDeposits(): BigInt {
    let value = this.get("totalPendingDeposits");
    return value.toBigInt();
  }

  set totalPendingDeposits(value: BigInt) {
    this.set("totalPendingDeposits", Value.fromBigInt(value));
  }

  get poolContract(): string {
    let value = this.get("poolContract");
    return value.toString();
  }

  set poolContract(value: string) {
    this.set("poolContract", Value.fromString(value));
  }

  get winnings(): BigInt {
    let value = this.get("winnings");
    return value.toBigInt();
  }

  set winnings(value: BigInt) {
    this.set("winnings", Value.fromBigInt(value));
  }

  get version(): BigInt {
    let value = this.get("version");
    return value.toBigInt();
  }

  set version(value: BigInt) {
    this.set("version", Value.fromBigInt(value));
  }
}

export class CollateralizationEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save CollateralizationEvent entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save CollateralizationEvent entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("CollateralizationEvent", id.toString(), this);
  }

  static load(id: string): CollateralizationEvent | null {
    return store.get(
      "CollateralizationEvent",
      id
    ) as CollateralizationEvent | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get pod(): string {
    let value = this.get("pod");
    return value.toString();
  }

  set pod(value: string) {
    this.set("pod", Value.fromString(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get tokenSupply(): BigInt {
    let value = this.get("tokenSupply");
    return value.toBigInt();
  }

  set tokenSupply(value: BigInt) {
    this.set("tokenSupply", Value.fromBigInt(value));
  }

  get collateral(): BigInt {
    let value = this.get("collateral");
    return value.toBigInt();
  }

  set collateral(value: BigInt) {
    this.set("collateral", Value.fromBigInt(value));
  }

  get exchangeRateMantissa(): BigInt {
    let value = this.get("exchangeRateMantissa");
    return value.toBigInt();
  }

  set exchangeRateMantissa(value: BigInt) {
    this.set("exchangeRateMantissa", Value.fromBigInt(value));
  }
}

export class PodPlayer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PodPlayer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PodPlayer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PodPlayer", id.toString(), this);
  }

  static load(id: string): PodPlayer | null {
    return store.get("PodPlayer", id) as PodPlayer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get pod(): string {
    let value = this.get("pod");
    return value.toString();
  }

  set pod(value: string) {
    this.set("pod", Value.fromString(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get balanceUnderlying(): BigInt {
    let value = this.get("balanceUnderlying");
    return value.toBigInt();
  }

  set balanceUnderlying(value: BigInt) {
    this.set("balanceUnderlying", Value.fromBigInt(value));
  }

  get lastDeposit(): BigInt {
    let value = this.get("lastDeposit");
    return value.toBigInt();
  }

  set lastDeposit(value: BigInt) {
    this.set("lastDeposit", Value.fromBigInt(value));
  }

  get lastDepositDrawId(): BigInt {
    let value = this.get("lastDepositDrawId");
    return value.toBigInt();
  }

  set lastDepositDrawId(value: BigInt) {
    this.set("lastDepositDrawId", Value.fromBigInt(value));
  }

  get version(): BigInt {
    let value = this.get("version");
    return value.toBigInt();
  }

  set version(value: BigInt) {
    this.set("version", Value.fromBigInt(value));
  }
}

export class Sponsor extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Sponsor entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Sponsor entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Sponsor", id.toString(), this);
  }

  static load(id: string): Sponsor | null {
    return store.get("Sponsor", id) as Sponsor | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get poolContract(): string {
    let value = this.get("poolContract");
    return value.toString();
  }

  set poolContract(value: string) {
    this.set("poolContract", Value.fromString(value));
  }

  get sponsorshipAndFeeBalance(): BigInt {
    let value = this.get("sponsorshipAndFeeBalance");
    return value.toBigInt();
  }

  set sponsorshipAndFeeBalance(value: BigInt) {
    this.set("sponsorshipAndFeeBalance", Value.fromBigInt(value));
  }
}

export class Admin extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Admin entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Admin entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Admin", id.toString(), this);
  }

  static load(id: string): Admin | null {
    return store.get("Admin", id) as Admin | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get addedAt(): BigInt {
    let value = this.get("addedAt");
    return value.toBigInt();
  }

  set addedAt(value: BigInt) {
    this.set("addedAt", Value.fromBigInt(value));
  }

  get poolContract(): string {
    let value = this.get("poolContract");
    return value.toString();
  }

  set poolContract(value: string) {
    this.set("poolContract", Value.fromString(value));
  }
}

export class PoolContract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PoolContract entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PoolContract entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PoolContract", id.toString(), this);
  }

  static load(id: string): PoolContract | null {
    return store.get("PoolContract", id) as PoolContract | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get draws(): Array<string> {
    let value = this.get("draws");
    return value.toStringArray();
  }

  set draws(value: Array<string>) {
    this.set("draws", Value.fromStringArray(value));
  }

  get admins(): Array<string> {
    let value = this.get("admins");
    return value.toStringArray();
  }

  set admins(value: Array<string>) {
    this.set("admins", Value.fromStringArray(value));
  }

  get players(): Array<string> {
    let value = this.get("players");
    return value.toStringArray();
  }

  set players(value: Array<string>) {
    this.set("players", Value.fromStringArray(value));
  }

  get playersCount(): BigInt | null {
    let value = this.get("playersCount");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set playersCount(value: BigInt | null) {
    if (value === null) {
      this.unset("playersCount");
    } else {
      this.set("playersCount", Value.fromBigInt(value as BigInt));
    }
  }

  get drawsCount(): BigInt | null {
    let value = this.get("drawsCount");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set drawsCount(value: BigInt | null) {
    if (value === null) {
      this.unset("drawsCount");
    } else {
      this.set("drawsCount", Value.fromBigInt(value as BigInt));
    }
  }

  get openDrawId(): BigInt {
    let value = this.get("openDrawId");
    return value.toBigInt();
  }

  set openDrawId(value: BigInt) {
    this.set("openDrawId", Value.fromBigInt(value));
  }

  get committedDrawId(): BigInt {
    let value = this.get("committedDrawId");
    return value.toBigInt();
  }

  set committedDrawId(value: BigInt) {
    this.set("committedDrawId", Value.fromBigInt(value));
  }

  get paused(): boolean {
    let value = this.get("paused");
    return value.toBoolean();
  }

  set paused(value: boolean) {
    this.set("paused", Value.fromBoolean(value));
  }

  get poolToken(): string | null {
    let value = this.get("poolToken");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set poolToken(value: string | null) {
    if (value === null) {
      this.unset("poolToken");
    } else {
      this.set("poolToken", Value.fromString(value as string));
    }
  }

  get openBalance(): BigInt {
    let value = this.get("openBalance");
    return value.toBigInt();
  }

  set openBalance(value: BigInt) {
    this.set("openBalance", Value.fromBigInt(value));
  }

  get committedBalance(): BigInt {
    let value = this.get("committedBalance");
    return value.toBigInt();
  }

  set committedBalance(value: BigInt) {
    this.set("committedBalance", Value.fromBigInt(value));
  }

  get sponsorshipAndFeeBalance(): BigInt {
    let value = this.get("sponsorshipAndFeeBalance");
    return value.toBigInt();
  }

  set sponsorshipAndFeeBalance(value: BigInt) {
    this.set("sponsorshipAndFeeBalance", Value.fromBigInt(value));
  }

  get winnings(): BigInt {
    let value = this.get("winnings");
    return value.toBigInt();
  }

  set winnings(value: BigInt) {
    this.set("winnings", Value.fromBigInt(value));
  }

  get version(): BigInt {
    let value = this.get("version");
    return value.toBigInt();
  }

  set version(value: BigInt) {
    this.set("version", Value.fromBigInt(value));
  }
}

export class PoolTokenContract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PoolTokenContract entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PoolTokenContract entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PoolTokenContract", id.toString(), this);
  }

  static load(id: string): PoolTokenContract | null {
    return store.get("PoolTokenContract", id) as PoolTokenContract | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get poolContract(): string {
    let value = this.get("poolContract");
    return value.toString();
  }

  set poolContract(value: string) {
    this.set("poolContract", Value.fromString(value));
  }
}
