import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
JSON.parse(CampaignFactory.interface),
'0x3650Ab773657E3d873262a548DDA3Ce24609fDFE'
);

export default instance;


