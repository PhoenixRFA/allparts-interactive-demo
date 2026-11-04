/**
 * FUTURE CONTRACTED CARTELL ADAPTER — NOT ACTIVE.
 *
 * This file deliberately contains no guessed endpoint, authentication scheme,
 * request fields, response shape, country coverage, or error mapping. Those
 * details must come from the signed Cartell B2B specification.
 *
 * The public interface must stay compatible with cartell.service.js:
 *   - lookupVehicleByRegistration(registration, options)
 *   - normaliseCartellVehicle(payload, ktypePattern)
 *   - cartellService
 *
 * Before activating this adapter, implement and test the contract-specific
 * request/response mapping below. Then change the single Cartell import in
 * vehicleEnrichment.service.js from './cartell.service.js' to this file.
 * Do not switch to this scaffold as-is: it fails fast by design.
 *
 * Contract details to confirm:
 *   - supported registration jurisdictions (IE, GB, NI) and exact plate formats;
 *   - endpoint, method, authentication and request payload;
 *   - accepted spacing/normalisation and whether multiple spellings cost calls;
 *   - success, not-found, unsupported-country, quota and retry responses;
 *   - vehicle/VIN fields and the exact TecDoc K-Type field and shape;
 *   - retention, privacy and logging restrictions for returned fields.
 */

import { ApiError } from '../utils/ApiError.js';

const UNCONFIGURED = () => new ApiError(
  'CARTELL_ADAPTER_NOT_CONFIGURED',
  'The contracted Cartell adapter has not been implemented from the signed specification.',
);

export function normaliseCartellVehicle(_payload, _ktypePattern) {
  throw UNCONFIGURED();
}

export async function lookupVehicleByRegistration(_registration, _options = {}) {
  throw UNCONFIGURED();
}

export const cartellService = {
  lookupVehicleByRegistration,
  normaliseCartellVehicle,
};
