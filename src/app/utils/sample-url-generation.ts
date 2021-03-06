import { GRAPH_URL } from '../services/graph-constants';

export function parseSampleUrl(url: string, version?: string) {
  let requestUrl = '';
  let queryVersion = '';
  let sampleUrl = '';
  let search = '';

  if (url !== '') {
    const urlObject: URL = new URL(url);
    requestUrl = urlObject.pathname.substr(6).replace(/\/$/, '');
    queryVersion = (version) ? version : urlObject.pathname.substring(1, 5);

    const searchParameters = urlObject.search;
    if (searchParameters) {
      try {
        search = decodeURI(searchParameters);
      } catch (error) {
        search = searchParameters;
      }
    }

    sampleUrl = `${GRAPH_URL}/${queryVersion}/${requestUrl + search}`;
  }
  return { queryVersion, requestUrl, sampleUrl, search };
}
