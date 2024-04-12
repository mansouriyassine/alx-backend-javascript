#!/usr/bin/node
// 7-load_balancer.js

/**
 * Returns the value from the first resolved promise.
 *
 * @param {Promise} chinaDownload A promise representing a download from China.
 * @param {Promise} USDownload A promise representing a download from the US.
 * @return {Promise} A promise that resolves with the value of the first resolved promise.
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
