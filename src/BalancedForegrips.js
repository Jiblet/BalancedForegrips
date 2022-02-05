"use strict";

//I used the "Bettergrips" mod to learn how to do this, but obviously this is a lot more in depth than theirs, and not OP lol.
//The goal is to give players a reason to use parts other than the RK-4 and Fortis Shift.
//Basically parts can be 1/12, 2/9 (fortis clone), 3/6 (better hera), or 4/3 (better rk-2)
//
//values somewhat based on their base values in tarkov

//Mar 16th changes: values changed from 1/12 - 2/9 - 3/6 - 4/3
// new values are 1/14 - 2/10 - 3/6 - 4/2

//note to the user: if you want to change a part to a different category, just cut and paste.
//or ,change the .Recoil = modRecoil to something like = "-2", or "-5", or whatever speaks to you.

class Mod
{
    constructor()
    {
        this.mod = "BalancedForegrips";
        Logger.info(`Loading: ${this.mod}`)
		ModLoader.onLoad[this.mod] = this.load.bind(this);
    }

    load()
    {	//Foregrip
		{
			//variable definition:
			let highErgoR = "-1";
			let highErgoE = "14";

			let midErgoR = "-2";
			let midErgoE = "10";

			let lowErgoR = "-3";
			let lowErgoE = "6";
			
			let badErgoR = "-4"; 	//TODO - maybe increase this because...
			let badErgoE = "2";		//TODO - ... we could punish with -1/-2 ergo but really good recoil?
			
			//highErgo -1/+14
			{				
				let modRecoil = highErgoR;
				let modErgo = highErgoE;
				//BCM MOD.3 Tactical grip
				DatabaseServer.tables.templates.items["5c7fc87d2e221644f31c0298"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["5c7fc87d2e221644f31c0298"]._props.Ergonomics = modErgo,
				
				//RTM Pillau Tactical grip
				DatabaseServer.tables.templates.items["5cf4fb76d7f00c065703d3ac"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["5cf4fb76d7f00c065703d3ac"]._props.Ergonomics = modErgo,
				
				//Zenit RK-6 Foregrip
				DatabaseServer.tables.templates.items["5c1bc7752e221602b1779b34"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["5c1bc7752e221602b1779b34"]._props.Ergonomics = modErgo,
				
				//MVF001 A3 Vertical Grip KeyMod black
				DatabaseServer.tables.templates.items["5fc0f9b5d724d907e2077d82"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["5fc0f9b5d724d907e2077d82"]._props.Ergonomics = modErgo
				//Note to the reader: the last part in a given { } must not have a , at the end of the line.
			}
			
			//midErgo -2/+10
			{
				let modRecoil = midErgoR;
				let modErgo = midErgoE;

				//HK Sturmgriff Foregrip
				DatabaseServer.tables.templates.items["619386379fb0c665d5490dbe"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["619386379fb0c665d5490dbe"]._props.Ergonomics = modErgo,

				//KAC Vertical foregrip
				DatabaseServer.tables.templates.items["5c87ca002e221600114cb150"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["5c87ca002e221600114cb150"]._props.Ergonomics = modErgo,

				//ASh-12 Vertical pistol grip
				DatabaseServer.tables.templates.items["5cda9bcfd7f00c0c0b53e900"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["5cda9bcfd7f00c0c0b53e900"]._props.Ergonomics = modErgo,

				//MP9-N vertical forgrip
				DatabaseServer.tables.templates.items["5de8fbad2fbe23140d3ee9c4"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["5de8fbad2fbe23140d3ee9c4"]._props.Ergonomics = modErgo,

				//Monstrum Tactical Vertical Fore Grim KeyMod
				DatabaseServer.tables.templates.items["615d8fd3290d254f5e6b2edc"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["615d8fd3290d254f5e6b2edc"]._props.Ergonomics = modErgo,

				//ORSIS T-5000M padded handguard grip
				DatabaseServer.tables.templates.items["5df36948bb49d91fb446d5ad"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["5df36948bb49d91fb446d5ad"]._props.Ergonomics = modErgo,

				//Fortis Shift tactical grip
				DatabaseServer.tables.templates.items["59f8a37386f7747af3328f06"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["59f8a37386f7747af3328f06"]._props.Ergonomics = modErgo,
				
				//Magpul AFG grip black
				DatabaseServer.tables.templates.items["588226d124597767ad33f787"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["588226d124597767ad33f787"]._props.Ergonomics = modErgo,        
		
				//Magpul AFG grip FDE
				DatabaseServer.tables.templates.items["588226dd24597767ad33f789"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["588226dd24597767ad33f789"]._props.Ergonomics = modErgo,				
				
				//Magpul AFG grip FG
				DatabaseServer.tables.templates.items["588226e62459776e3e094af7"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["588226e62459776e3e094af7"]._props.Ergonomics = modErgo,				
				
				//Magpul AFG grip OD
				DatabaseServer.tables.templates.items["588226ef24597767af46e39c"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["588226ef24597767af46e39c"]._props.Ergonomics = modErgo,
				
				//Stark SE-5 Express Grip
				DatabaseServer.tables.templates.items["5b057b4f5acfc4771e1bd3e9"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["5b057b4f5acfc4771e1bd3e9"]._props.Ergonomics = modErgo,
				
				//Strike Industries Cobra Tactical foreGrip
				DatabaseServer.tables.templates.items["5c791e872e2216001219c40a"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["5c791e872e2216001219c40a"]._props.Ergonomics = modErgo,
				
				//Zenit RK-4 Foregrip
				DatabaseServer.tables.templates.items["5c1bc5fb2e221602b1779b32"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["5c1bc5fb2e221602b1779b32"]._props.Ergonomics = modErgo,
				
				//Zenit RK-5 Foregrip
				DatabaseServer.tables.templates.items["5c1bc7432e221602b412949d"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["5c1bc7432e221602b412949d"]._props.Ergonomics = modErgo,
				
				//Magpul M-LOK AFG (Olive Drab) Tactical grip
				DatabaseServer.tables.templates.items["57cffcdd24597763f5110006"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["57cffcdd24597763f5110006"]._props.Ergonomics = modErgo,
				
				//Magpul M-LOK AFG (Stealth Gray) Tactical grip
				DatabaseServer.tables.templates.items["57cffce524597763b31685d8"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["57cffce524597763b31685d8"]._props.Ergonomics = modErgo,
				
				//Magpul M-LOK AFG (Flat Dark Earth) Tactical grip
				DatabaseServer.tables.templates.items["57cffcd624597763133760c5"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["57cffcd624597763133760c5"]._props.Ergonomics = modErgo,
				
				//Magpul M-LOK AFG Tactical grip
				DatabaseServer.tables.templates.items["57cffb66245977632f391a99"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["57cffb66245977632f391a99"]._props.Ergonomics = modErgo
				
			}	
			//LowErgo -3/+6
			{
				let modRecoil = lowErgoR;
				let modErgo = lowErgoE;
				
				//TangoDown Stubby BGV-MK46K foregrip (Black)
				DatabaseServer.tables.templates.items["558032614bdc2de7118b4585"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["558032614bdc2de7118b4585"]._props.Ergonomics = modErgo,
				
				//TangoDown Stubby BGV-MK46K foregrip (FDE)
				DatabaseServer.tables.templates.items["58c157be86f77403c74b2bb6"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["58c157be86f77403c74b2bb6"]._props.Ergonomics = modErgo,
				
				//TangoDown Stubby BGV-MK46K foregrip (Stealth Grey)
				DatabaseServer.tables.templates.items["58c157c886f774032749fb06"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["58c157c886f774032749fb06"]._props.Ergonomics = modErgo,
				
				//Tactical Dynamics Skeletonized Foregrip
				DatabaseServer.tables.templates.items["5f6340d3ca442212f4047eb2"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["5f6340d3ca442212f4047eb2"]._props.Ergonomics = modErgo,
				
				//Viking Tactics UVG tactical foregrip
				DatabaseServer.tables.templates.items["591af28e86f77414a27a9e1d"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["591af28e86f77414a27a9e1d"]._props.Ergonomics = modErgo,
				
				//Zenit RK-0 Foregrip
				DatabaseServer.tables.templates.items["5c1bc4812e22164bef5cfde7"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["5c1bc4812e22164bef5cfde7"]._props.Ergonomics = modErgo,
								
				//KAC stopper panel for URX 3/3.1
				DatabaseServer.tables.templates.items["5d123b7dd7ad1a004f01b262"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["5d123b7dd7ad1a004f01b262"]._props.Ergonomics = modErgo,
				
				//KAC stopper panel for URX 3/3.1 FDE
				DatabaseServer.tables.templates.items["5d124c1ad7ad1a12227c53a7"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["5d124c1ad7ad1a12227c53a7"]._props.Ergonomics = modErgo,
											
				//Sig Sauer Vertical Foregrip Keymod Black
				DatabaseServer.tables.templates.items["5fc0f9cbd6fa9c00c571bb90"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["5fc0f9cbd6fa9c00c571bb90"]._props.Ergonomics = modErgo,
				
				//Zenit RK-1 Foregrip
				DatabaseServer.tables.templates.items["5c1bc5612e221602b5429350"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["5c1bc5612e221602b5429350"]._props.Ergonomics = modErgo	
				
			}
			//badErgo -4/+2
			{
				let modRecoil = badErgoR;
				let modErgo = badErgoE;
				
				//Magpul RVG grip black //TODO - Disagree here - Stubby wee thing!
				DatabaseServer.tables.templates.items["59fc48e086f77463b1118392"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["59fc48e086f77463b1118392"]._props.Ergonomics = modErgo,
				
				//Magpul RVG grip FDE //TODO - Disagree here - Stubby wee thing!
				DatabaseServer.tables.templates.items["5fce0cf655375d18a253eff0"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["5fce0cf655375d18a253eff0"]._props.Ergonomics = modErgo,
				
				//Zenit RK-1 Foregrip on B-25U mount
				DatabaseServer.tables.templates.items["5c1cd46f2e22164bef5cfedb"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["5c1cd46f2e22164bef5cfedb"]._props.Ergonomics = modErgo,
				
				//Zenit RK-2 Foregrip
				DatabaseServer.tables.templates.items["5c1bc5af2e221602b412949b"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["5c1bc5af2e221602b412949b"]._props.Ergonomics = modErgo,
				
				//Hera Arms CQR tactical grip
				DatabaseServer.tables.templates.items["5a7dbfc1159bd40016548fde"]._props.Recoil = modRecoil,
				DatabaseServer.tables.templates.items["5a7dbfc1159bd40016548fde"]._props.Ergonomics = modErgo
			}
		}
    }
}
module.exports.Mod = Mod;
