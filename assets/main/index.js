System.register("chunks:///_virtual/main",["./RefineGame.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/RefineGame.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,n,l,a;return{setters:[function(e){t=e.inheritsLoose,i=e.applyDecoratedDescriptor,n=e.initializerDefineProperty,l=e.assertThisInitialized},function(e){a=e.cclegacy}],execute:function(){var r,o,s,u,c,p,b,h,g,f,m,w,v,d,L,I,y,_;a._RF.push({},"cfa99lfHWJCoocYp7BXmwMk","RefineGame",void 0);var z=cc._decorator,F=z.ccclass,B=z.property;e("default",(r=B(cc.Sprite),o=B(cc.SpriteFrame),s=B(cc.SpriteFrame),u=B(cc.SpriteFrame),c=B(cc.Button),p=B(cc.Label),b=B(cc.Label),h=B(cc.Label),F((f=function(e){function i(){for(var t,i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return t=e.call.apply(e,[this].concat(a))||this,n(t,"weaponImage",m,l(t)),n(t,"weaponImage1_4",w,l(t)),n(t,"weaponImage5_7",v,l(t)),n(t,"weaponImage8_10",d,l(t)),n(t,"refineButton",L,l(t)),n(t,"goldLabel",I,l(t)),n(t,"statusLabel",y,l(t)),n(t,"levelLabel",_,l(t)),t.level=1,t.gold=1e4,t}t(i,e);var a=i.prototype;return a.updateUI=function(){this.level>=1&&this.level<=4?this.weaponImage.spriteFrame=this.weaponImage1_4:this.level>=5&&this.level<=7?this.weaponImage.spriteFrame=this.weaponImage5_7:this.level>=8&&this.level<=10&&(this.weaponImage.spriteFrame=this.weaponImage8_10),this.goldLabel.string="金幣："+this.gold,this.levelLabel.string="武器等級：+"+this.level},a.onRefineClicked=function(){this.statusLabel?10!==this.level?this.gold>=10?(this.gold-=10,Math.random()<.7?this.level<10&&(this.level++,this.statusLabel.string="精煉成功！武器等級提升。"):this.level>1?(this.level--,this.statusLabel.string="精煉失敗！武器等級降低。"):this.statusLabel.string="已達最低等級！",this.updateUI()):this.statusLabel.string="金幣不足！":this.statusLabel.string="已達最高等級，無法再精煉！":cc.error("statusLabel is not set!")},a.onLoad=function(){this.updateUI(),this.refineButton.node.on("click",this.onRefineClicked,this)},i}(cc.Component),m=i(f.prototype,"weaponImage",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=i(f.prototype,"weaponImage1_4",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=i(f.prototype,"weaponImage5_7",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=i(f.prototype,"weaponImage8_10",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=i(f.prototype,"refineButton",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=i(f.prototype,"goldLabel",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=i(f.prototype,"statusLabel",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=i(f.prototype,"levelLabel",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=f))||g));a._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});