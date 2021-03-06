import { BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Pod
} from '../../generated/schema'

const ZERO = BigInt.fromI32(0)

export function loadOrCreatePod(podAddress: Address, poolAddress: Address): Pod {
  const podId = podAddress.toHex()
  let pod = Pod.load(podId)

  if (!pod) {
    pod = new Pod(podId)
    pod.address = podAddress
    pod.currentExchangeRateMantissa = ZERO
    pod.balanceUnderlying = ZERO
    pod.totalPendingDeposits = ZERO
    pod.podPlayersCount = ZERO
    pod.poolContract = poolAddress.toHex()
    pod.version = ZERO
    pod.winnings = ZERO

    pod.save()
  }

  return pod as Pod
}
