import{ac as M,ad as v,am as L,at as T,as as A,M as O,ar as R,ap as P,g as m,e as k,D as y,ak as C,o as U,an as f,b as d,aT as x,aU as w,aV as E,af as N,aW as V,Y as D,a as G,aX as W,B,ao as b}from"./ddd@DwDq534T.js";class H{constructor(e){this.IFF=e}parseBlock(){this.IFF.debugger.offset=this.IFF.reader.offset,this.IFF.debugger.closeForms();const e=this.IFF.reader.getIDTag();let r=this.IFF.reader.getUint32();switch(r>this.IFF.reader.dv.byteLength-this.IFF.reader.offset&&(this.IFF.reader.offset-=4,r=this.IFF.reader.getUint16()),this.IFF.debugger.dataOffset=this.IFF.reader.offset,this.IFF.debugger.length=r,e){case"FORM":this.IFF.parseForm(r);break;case"ICON":case"VMPA":case"BBOX":case"NORM":case"PRE ":case"POST":case"KEY ":case"SPAN":case"TIME":case"CLRS":case"CLRA":case"FILT":case"DITH":case"CONT":case"BRIT":case"SATR":case"HUE ":case"GAMM":case"NEGA":case"IFLT":case"PFLT":case"PROJ":case"AXIS":case"AAST":case"PIXB":case"AUVO":case"STCK":case"PROC":case"VALU":case"FUNC":case"PNAM":case"INAM":case"GRST":case"GREN":case"GRPT":case"FKEY":case"IKEY":case"CSYS":case"OPAQ":case"CMAP":case"NLOC":case"NZOM":case"NVER":case"NSRV":case"NVSK":case"NCRD":case"WRPW":case"WRPH":case"NMOD":case"NSEL":case"NPRW":case"NPLA":case"NODS":case"VERS":case"ENUM":case"TAG ":case"OPAC":case"CGMD":case"CGTY":case"CGST":case"CGEN":case"CGTS":case"CGTE":case"OSMP":case"OMDE":case"OUTR":case"FLAG":case"TRNL":case"GLOW":case"GVAL":case"SHRP":case"RFOP":case"RSAN":case"TROP":case"RBLR":case"TBLR":case"CLRH":case"CLRF":case"ADTR":case"LINE":case"ALPH":case"VCOL":case"ENAB":this.IFF.debugger.skipped=!0,this.IFF.reader.skip(r);break;case"SURF":this.IFF.parseSurfaceLwo2(r);break;case"CLIP":this.IFF.parseClipLwo2(r);break;case"IPIX":case"IMIP":case"IMOD":case"AMOD":case"IINV":case"INCR":case"IAXS":case"IFOT":case"ITIM":case"IWRL":case"IUTI":case"IINX":case"IINY":case"IINZ":case"IREF":r===4?this.IFF.currentNode[e]=this.IFF.reader.getInt32():this.IFF.reader.skip(r);break;case"OTAG":this.IFF.parseObjectTag();break;case"LAYR":this.IFF.parseLayer(r);break;case"PNTS":this.IFF.parsePoints(r);break;case"VMAP":this.IFF.parseVertexMapping(r);break;case"AUVU":case"AUVN":this.IFF.reader.skip(r-1),this.IFF.reader.getVariableLengthIndex();break;case"POLS":this.IFF.parsePolygonList(r);break;case"TAGS":this.IFF.parseTagStrings(r);break;case"PTAG":this.IFF.parsePolygonTagMapping(r);break;case"VMAD":this.IFF.parseVertexMapping(r,!0);break;case"DESC":this.IFF.currentForm.description=this.IFF.reader.getString();break;case"TEXT":case"CMNT":case"NCOM":this.IFF.currentForm.comment=this.IFF.reader.getString();break;case"NAME":this.IFF.currentForm.channelName=this.IFF.reader.getString();break;case"WRAP":this.IFF.currentForm.wrap={w:this.IFF.reader.getUint16(),h:this.IFF.reader.getUint16()};break;case"IMAG":const t=this.IFF.reader.getVariableLengthIndex();this.IFF.currentForm.imageIndex=t;break;case"OREF":this.IFF.currentForm.referenceObject=this.IFF.reader.getString();break;case"ROID":this.IFF.currentForm.referenceObjectID=this.IFF.reader.getUint32();break;case"SSHN":this.IFF.currentSurface.surfaceShaderName=this.IFF.reader.getString();break;case"AOVN":this.IFF.currentSurface.surfaceCustomAOVName=this.IFF.reader.getString();break;case"NSTA":this.IFF.currentForm.disabled=this.IFF.reader.getUint16();break;case"NRNM":this.IFF.currentForm.realName=this.IFF.reader.getString();break;case"NNME":this.IFF.currentForm.refName=this.IFF.reader.getString(),this.IFF.currentSurface.nodes[this.IFF.currentForm.refName]=this.IFF.currentForm;break;case"INME":this.IFF.currentForm.nodeName||(this.IFF.currentForm.nodeName=[]),this.IFF.currentForm.nodeName.push(this.IFF.reader.getString());break;case"IINN":this.IFF.currentForm.inputNodeName||(this.IFF.currentForm.inputNodeName=[]),this.IFF.currentForm.inputNodeName.push(this.IFF.reader.getString());break;case"IINM":this.IFF.currentForm.inputName||(this.IFF.currentForm.inputName=[]),this.IFF.currentForm.inputName.push(this.IFF.reader.getString());break;case"IONM":this.IFF.currentForm.inputOutputName||(this.IFF.currentForm.inputOutputName=[]),this.IFF.currentForm.inputOutputName.push(this.IFF.reader.getString());break;case"FNAM":this.IFF.currentForm.fileName=this.IFF.reader.getString();break;case"CHAN":r===4?this.IFF.currentForm.textureChannel=this.IFF.reader.getIDTag():this.IFF.reader.skip(r);break;case"SMAN":const s=this.IFF.reader.getFloat32();this.IFF.currentSurface.attributes.smooth=!(s<0);break;case"COLR":this.IFF.currentSurface.attributes.Color={value:this.IFF.reader.getFloat32Array(3)},this.IFF.reader.skip(2);break;case"LUMI":this.IFF.currentSurface.attributes.Luminosity={value:this.IFF.reader.getFloat32()},this.IFF.reader.skip(2);break;case"SPEC":this.IFF.currentSurface.attributes.Specular={value:this.IFF.reader.getFloat32()},this.IFF.reader.skip(2);break;case"DIFF":this.IFF.currentSurface.attributes.Diffuse={value:this.IFF.reader.getFloat32()},this.IFF.reader.skip(2);break;case"REFL":this.IFF.currentSurface.attributes.Reflection={value:this.IFF.reader.getFloat32()},this.IFF.reader.skip(2);break;case"GLOS":this.IFF.currentSurface.attributes.Glossiness={value:this.IFF.reader.getFloat32()},this.IFF.reader.skip(2);break;case"TRAN":this.IFF.currentSurface.attributes.opacity=this.IFF.reader.getFloat32(),this.IFF.reader.skip(2);break;case"BUMP":this.IFF.currentSurface.attributes.bumpStrength=this.IFF.reader.getFloat32(),this.IFF.reader.skip(2);break;case"SIDE":this.IFF.currentSurface.attributes.side=this.IFF.reader.getUint16();break;case"RIMG":this.IFF.currentSurface.attributes.reflectionMap=this.IFF.reader.getVariableLengthIndex();break;case"RIND":this.IFF.currentSurface.attributes.refractiveIndex=this.IFF.reader.getFloat32(),this.IFF.reader.skip(2);break;case"TIMG":this.IFF.currentSurface.attributes.refractionMap=this.IFF.reader.getVariableLengthIndex();break;case"IMAP":this.IFF.reader.skip(2);break;case"TMAP":this.IFF.debugger.skipped=!0,this.IFF.reader.skip(r);break;case"IUVI":this.IFF.currentNode.UVChannel=this.IFF.reader.getString(r);break;case"IUTL":this.IFF.currentNode.widthWrappingMode=this.IFF.reader.getUint32();break;case"IVTL":this.IFF.currentNode.heightWrappingMode=this.IFF.reader.getUint32();break;case"BLOK":break;default:this.IFF.parseUnknownCHUNK(e,r)}e!="FORM"&&(this.IFF.debugger.node=1,this.IFF.debugger.nodeID=e,this.IFF.debugger.log()),this.IFF.reader.offset>=this.IFF.currentFormEnd&&(this.IFF.currentForm=this.IFF.parentForm)}}class X{constructor(e){this.IFF=e}parseBlock(){this.IFF.debugger.offset=this.IFF.reader.offset,this.IFF.debugger.closeForms();const e=this.IFF.reader.getIDTag(),r=this.IFF.reader.getUint32();switch(this.IFF.debugger.dataOffset=this.IFF.reader.offset,this.IFF.debugger.length=r,e){case"FORM":this.IFF.parseForm(r);break;case"ICON":case"VMPA":case"BBOX":case"NORM":case"PRE ":case"POST":case"KEY ":case"SPAN":case"TIME":case"CLRS":case"CLRA":case"FILT":case"DITH":case"CONT":case"BRIT":case"SATR":case"HUE ":case"GAMM":case"NEGA":case"IFLT":case"PFLT":case"PROJ":case"AXIS":case"AAST":case"PIXB":case"STCK":case"VALU":case"PNAM":case"INAM":case"GRST":case"GREN":case"GRPT":case"FKEY":case"IKEY":case"CSYS":case"OPAQ":case"CMAP":case"NLOC":case"NZOM":case"NVER":case"NSRV":case"NCRD":case"NMOD":case"NSEL":case"NPRW":case"NPLA":case"VERS":case"ENUM":case"TAG ":case"CGMD":case"CGTY":case"CGST":case"CGEN":case"CGTS":case"CGTE":case"OSMP":case"OMDE":case"OUTR":case"FLAG":case"TRNL":case"SHRP":case"RFOP":case"RSAN":case"TROP":case"RBLR":case"TBLR":case"CLRH":case"CLRF":case"ADTR":case"GLOW":case"LINE":case"ALPH":case"VCOL":case"ENAB":this.IFF.debugger.skipped=!0,this.IFF.reader.skip(r);break;case"IPIX":case"IMIP":case"IMOD":case"AMOD":case"IINV":case"INCR":case"IAXS":case"IFOT":case"ITIM":case"IWRL":case"IUTI":case"IINX":case"IINY":case"IINZ":case"IREF":r===4?this.IFF.currentNode[e]=this.IFF.reader.getInt32():this.IFF.reader.skip(r);break;case"OTAG":this.IFF.parseObjectTag();break;case"LAYR":this.IFF.parseLayer(r);break;case"PNTS":this.IFF.parsePoints(r);break;case"VMAP":this.IFF.parseVertexMapping(r);break;case"POLS":this.IFF.parsePolygonList(r);break;case"TAGS":this.IFF.parseTagStrings(r);break;case"PTAG":this.IFF.parsePolygonTagMapping(r);break;case"VMAD":this.IFF.parseVertexMapping(r,!0);break;case"DESC":this.IFF.currentForm.description=this.IFF.reader.getString();break;case"TEXT":case"CMNT":case"NCOM":this.IFF.currentForm.comment=this.IFF.reader.getString();break;case"NAME":this.IFF.currentForm.channelName=this.IFF.reader.getString();break;case"WRAP":this.IFF.currentForm.wrap={w:this.IFF.reader.getUint16(),h:this.IFF.reader.getUint16()};break;case"IMAG":const t=this.IFF.reader.getVariableLengthIndex();this.IFF.currentForm.imageIndex=t;break;case"OREF":this.IFF.currentForm.referenceObject=this.IFF.reader.getString();break;case"ROID":this.IFF.currentForm.referenceObjectID=this.IFF.reader.getUint32();break;case"SSHN":this.IFF.currentSurface.surfaceShaderName=this.IFF.reader.getString();break;case"AOVN":this.IFF.currentSurface.surfaceCustomAOVName=this.IFF.reader.getString();break;case"NSTA":this.IFF.currentForm.disabled=this.IFF.reader.getUint16();break;case"NRNM":this.IFF.currentForm.realName=this.IFF.reader.getString();break;case"NNME":this.IFF.currentForm.refName=this.IFF.reader.getString(),this.IFF.currentSurface.nodes[this.IFF.currentForm.refName]=this.IFF.currentForm;break;case"INME":this.IFF.currentForm.nodeName||(this.IFF.currentForm.nodeName=[]),this.IFF.currentForm.nodeName.push(this.IFF.reader.getString());break;case"IINN":this.IFF.currentForm.inputNodeName||(this.IFF.currentForm.inputNodeName=[]),this.IFF.currentForm.inputNodeName.push(this.IFF.reader.getString());break;case"IINM":this.IFF.currentForm.inputName||(this.IFF.currentForm.inputName=[]),this.IFF.currentForm.inputName.push(this.IFF.reader.getString());break;case"IONM":this.IFF.currentForm.inputOutputName||(this.IFF.currentForm.inputOutputName=[]),this.IFF.currentForm.inputOutputName.push(this.IFF.reader.getString());break;case"FNAM":this.IFF.currentForm.fileName=this.IFF.reader.getString();break;case"CHAN":r===4?this.IFF.currentForm.textureChannel=this.IFF.reader.getIDTag():this.IFF.reader.skip(r);break;case"SMAN":const s=this.IFF.reader.getFloat32();this.IFF.currentSurface.attributes.smooth=!(s<0);break;case"COLR":this.IFF.currentSurface.attributes.Color={value:this.IFF.reader.getFloat32Array(3)},this.IFF.reader.skip(2);break;case"LUMI":this.IFF.currentSurface.attributes.Luminosity={value:this.IFF.reader.getFloat32()},this.IFF.reader.skip(2);break;case"SPEC":this.IFF.currentSurface.attributes.Specular={value:this.IFF.reader.getFloat32()},this.IFF.reader.skip(2);break;case"DIFF":this.IFF.currentSurface.attributes.Diffuse={value:this.IFF.reader.getFloat32()},this.IFF.reader.skip(2);break;case"REFL":this.IFF.currentSurface.attributes.Reflection={value:this.IFF.reader.getFloat32()},this.IFF.reader.skip(2);break;case"GLOS":this.IFF.currentSurface.attributes.Glossiness={value:this.IFF.reader.getFloat32()},this.IFF.reader.skip(2);break;case"TRAN":this.IFF.currentSurface.attributes.opacity=this.IFF.reader.getFloat32(),this.IFF.reader.skip(2);break;case"BUMP":this.IFF.currentSurface.attributes.bumpStrength=this.IFF.reader.getFloat32(),this.IFF.reader.skip(2);break;case"SIDE":this.IFF.currentSurface.attributes.side=this.IFF.reader.getUint16();break;case"RIMG":this.IFF.currentSurface.attributes.reflectionMap=this.IFF.reader.getVariableLengthIndex();break;case"RIND":this.IFF.currentSurface.attributes.refractiveIndex=this.IFF.reader.getFloat32(),this.IFF.reader.skip(2);break;case"TIMG":this.IFF.currentSurface.attributes.refractionMap=this.IFF.reader.getVariableLengthIndex();break;case"IMAP":this.IFF.currentSurface.attributes.imageMapIndex=this.IFF.reader.getUint32();break;case"IUVI":this.IFF.currentNode.UVChannel=this.IFF.reader.getString(r);break;case"IUTL":this.IFF.currentNode.widthWrappingMode=this.IFF.reader.getUint32();break;case"IVTL":this.IFF.currentNode.heightWrappingMode=this.IFF.reader.getUint32();break;default:this.IFF.parseUnknownCHUNK(e,r)}e!="FORM"&&(this.IFF.debugger.node=1,this.IFF.debugger.nodeID=e,this.IFF.debugger.log()),this.IFF.reader.offset>=this.IFF.currentFormEnd&&(this.IFF.currentForm=this.IFF.parentForm)}}class K{constructor(){this.debugger=new j}parse(e){if(this.reader=new Y(e),this.tree={materials:{},layers:[],tags:[],textures:[]},this.currentLayer=this.tree,this.currentForm=this.tree,this.parseTopForm(),this.tree.format!==void 0){if(this.tree.format==="LWO2")for(this.parser=new H(this);!this.reader.endOfFile();)this.parser.parseBlock();else if(this.tree.format==="LWO3")for(this.parser=new X(this);!this.reader.endOfFile();)this.parser.parseBlock();return this.debugger.offset=this.reader.offset,this.debugger.closeForms(),this.tree}}parseTopForm(){this.debugger.offset=this.reader.offset;var e=this.reader.getIDTag();if(e!=="FORM"){console.warn("LWOLoader: Top-level FORM missing.");return}var r=this.reader.getUint32();this.debugger.dataOffset=this.reader.offset,this.debugger.length=r;var t=this.reader.getIDTag();t==="LWO2"?this.tree.format=t:t==="LWO3"&&(this.tree.format=t),this.debugger.node=0,this.debugger.nodeID=t,this.debugger.log()}parseForm(e){var r=this.reader.getIDTag();switch(r){case"ISEQ":case"ANIM":case"STCC":case"VPVL":case"VPRM":case"NROT":case"WRPW":case"WRPH":case"FUNC":case"FALL":case"OPAC":case"GRAD":case"ENVS":case"VMOP":case"VMBG":case"OMAX":case"STEX":case"CKBG":case"CKEY":case"VMLA":case"VMLB":this.debugger.skipped=!0,this.skipForm(e);break;case"META":case"NNDS":case"NODS":case"NDTA":case"ADAT":case"AOVS":case"BLOK":case"IBGC":case"IOPC":case"IIMG":case"TXTR":this.debugger.length=4,this.debugger.skipped=!0;break;case"IFAL":case"ISCL":case"IPOS":case"IROT":case"IBMP":case"IUTD":case"IVTD":this.parseTextureNodeAttribute(r);break;case"ENVL":this.parseEnvelope(e);break;case"CLIP":this.tree.format==="LWO2"?this.parseForm(e):this.parseClip(e);break;case"STIL":this.parseImage();break;case"XREF":this.reader.skip(8),this.currentForm.referenceTexture={index:this.reader.getUint32(),refName:this.reader.getString()};break;case"IMST":this.parseImageStateForm(e);break;case"SURF":this.parseSurfaceForm(e);break;case"VALU":this.parseValueForm(e);break;case"NTAG":this.parseSubNode(e);break;case"ATTR":case"SATR":this.setupForm("attributes",e);break;case"NCON":this.parseConnections(e);break;case"SSHA":this.parentForm=this.currentForm,this.currentForm=this.currentSurface,this.setupForm("surfaceShader",e);break;case"SSHD":this.setupForm("surfaceShaderData",e);break;case"ENTR":this.parseEntryForm(e);break;case"IMAP":this.parseImageMap(e);break;case"TAMP":this.parseXVAL("amplitude",e);break;case"TMAP":this.setupForm("textureMap",e);break;case"CNTR":this.parseXVAL3("center",e);break;case"SIZE":this.parseXVAL3("scale",e);break;case"ROTA":this.parseXVAL3("rotation",e);break;default:this.parseUnknownForm(r,e)}this.debugger.node=0,this.debugger.nodeID=r,this.debugger.log()}setupForm(e,r){this.currentForm||(this.currentForm=this.currentNode),this.currentFormEnd=this.reader.offset+r,this.parentForm=this.currentForm,this.currentForm[e]?(console.warn("LWOLoader: form already exists on parent: ",e,this.currentForm),this.currentForm=this.currentForm[e]):(this.currentForm[e]={},this.currentForm=this.currentForm[e])}skipForm(e){this.reader.skip(e-4)}parseUnknownForm(e,r){console.warn("LWOLoader: unknown FORM encountered: "+e,r),Z(this.reader.dv.buffer,this.reader.offset,r-4),this.reader.skip(r-4)}parseSurfaceForm(e){this.reader.skip(8);var r=this.reader.getString(),t={attributes:{},connections:{},name:r,inputName:r,nodes:{},source:this.reader.getString()};this.tree.materials[r]=t,this.currentSurface=t,this.parentForm=this.tree.materials,this.currentForm=t,this.currentFormEnd=this.reader.offset+e}parseSurfaceLwo2(e){var r=this.reader.getString(),t={attributes:{},connections:{},name:r,nodes:{},source:this.reader.getString()};this.tree.materials[r]=t,this.currentSurface=t,this.parentForm=this.tree.materials,this.currentForm=t,this.currentFormEnd=this.reader.offset+e}parseSubNode(e){this.reader.skip(8);var r=this.reader.getString(),t={name:r};this.currentForm=t,this.currentNode=t,this.currentFormEnd=this.reader.offset+e}parseConnections(e){this.currentFormEnd=this.reader.offset+e,this.parentForm=this.currentForm,this.currentForm=this.currentSurface.connections}parseEntryForm(e){this.reader.skip(8);var r=this.reader.getString();this.currentForm=this.currentNode.attributes,this.setupForm(r,e)}parseValueForm(){this.reader.skip(8);var e=this.reader.getString();e==="double"?this.currentForm.value=this.reader.getUint64():e==="int"?this.currentForm.value=this.reader.getUint32():e==="vparam"?(this.reader.skip(24),this.currentForm.value=this.reader.getFloat64()):e==="vparam3"&&(this.reader.skip(24),this.currentForm.value=this.reader.getFloat64Array(3))}parseImageStateForm(){this.reader.skip(8),this.currentForm.mipMapLevel=this.reader.getFloat32()}parseImageMap(e){this.currentFormEnd=this.reader.offset+e,this.parentForm=this.currentForm,this.currentForm.maps||(this.currentForm.maps=[]);var r={};this.currentForm.maps.push(r),this.currentForm=r,this.reader.skip(10)}parseTextureNodeAttribute(e){switch(this.reader.skip(28),this.reader.skip(20),e){case"ISCL":this.currentNode.scale=this.reader.getFloat32Array(3);break;case"IPOS":this.currentNode.position=this.reader.getFloat32Array(3);break;case"IROT":this.currentNode.rotation=this.reader.getFloat32Array(3);break;case"IFAL":this.currentNode.falloff=this.reader.getFloat32Array(3);break;case"IBMP":this.currentNode.amplitude=this.reader.getFloat32();break;case"IUTD":this.currentNode.uTiles=this.reader.getFloat32();break;case"IVTD":this.currentNode.vTiles=this.reader.getFloat32();break}this.reader.skip(2)}parseEnvelope(e){this.reader.skip(e-4)}parseClip(e){var r=this.reader.getIDTag();if(r==="FORM"){this.reader.skip(16),this.currentNode.fileName=this.reader.getString();return}this.reader.setOffset(this.reader.offset-4),this.currentFormEnd=this.reader.offset+e,this.parentForm=this.currentForm,this.reader.skip(8);var t={index:this.reader.getUint32()};this.tree.textures.push(t),this.currentForm=t}parseClipLwo2(e){for(var r={index:this.reader.getUint32(),fileName:""};;){var t=this.reader.getIDTag(),s=this.reader.getUint16();if(t==="STIL"){r.fileName=this.reader.getString();break}if(s>=e)break}this.tree.textures.push(r),this.currentForm=r}parseImage(){this.reader.skip(8),this.currentForm.fileName=this.reader.getString()}parseXVAL(e,r){var t=this.reader.offset+r-4;this.reader.skip(8),this.currentForm[e]=this.reader.getFloat32(),this.reader.setOffset(t)}parseXVAL3(e,r){var t=this.reader.offset+r-4;this.reader.skip(8),this.currentForm[e]={x:this.reader.getFloat32(),y:this.reader.getFloat32(),z:this.reader.getFloat32()},this.reader.setOffset(t)}parseObjectTag(){this.tree.objectTags||(this.tree.objectTags={}),this.tree.objectTags[this.reader.getIDTag()]={tagString:this.reader.getString()}}parseLayer(e){var r=this.reader.getUint16(),t=this.reader.getUint16(),s=this.reader.getFloat32Array(3),a={number:r,flags:t,pivot:[-s[0],s[1],s[2]],name:this.reader.getString()};this.tree.layers.push(a),this.currentLayer=a;var i=16+S(this.currentLayer.name);this.currentLayer.parent=i<e?this.reader.getUint16():-1}parsePoints(e){this.currentPoints=[];for(var r=0;r<e/4;r+=3)this.currentPoints.push(-this.reader.getFloat32(),this.reader.getFloat32(),this.reader.getFloat32())}parseVertexMapping(e,r){var t=this.reader.offset+e,s=this.reader.getString();if(this.reader.offset===t){this.currentForm.UVChannel=s;return}this.reader.setOffset(this.reader.offset-S(s));var a=this.reader.getIDTag();this.reader.getUint16();var i=this.reader.getString(),c=e-6-S(i);switch(a){case"TXUV":this.parseUVMapping(i,t,r);break;case"MORF":case"SPOT":this.parseMorphTargets(i,t,a);break;case"APSL":case"NORM":case"WGHT":case"MNVW":case"PICK":case"RGB ":case"RGBA":this.reader.skip(c);break;default:console.warn("LWOLoader: unknown vertex map type: "+a),this.reader.skip(c)}}parseUVMapping(e,r,t){for(var s=[],a=[],i=[];this.reader.offset<r;)s.push(this.reader.getVariableLengthIndex()),t&&a.push(this.reader.getVariableLengthIndex()),i.push(this.reader.getFloat32(),this.reader.getFloat32());t?(this.currentLayer.discontinuousUVs||(this.currentLayer.discontinuousUVs={}),this.currentLayer.discontinuousUVs[e]={uvIndices:s,polyIndices:a,uvs:i}):(this.currentLayer.uvs||(this.currentLayer.uvs={}),this.currentLayer.uvs[e]={uvIndices:s,uvs:i})}parseMorphTargets(e,r,t){var s=[],a=[];for(t=t==="MORF"?"relative":"absolute";this.reader.offset<r;)s.push(this.reader.getVariableLengthIndex()),a.push(this.reader.getFloat32(),this.reader.getFloat32(),-this.reader.getFloat32());this.currentLayer.morphTargets||(this.currentLayer.morphTargets={}),this.currentLayer.morphTargets[e]={indices:s,points:a,type:t}}parsePolygonList(e){for(var r=this.reader.offset+e,t=this.reader.getIDTag(),s=[],a=[];this.reader.offset<r;){var i=this.reader.getUint16();i=i&1023,a.push(i);for(var c=0;c<i;c++)s.push(this.reader.getVariableLengthIndex())}var n={type:t,vertexIndices:s,polygonDimensions:a,points:this.currentPoints};a[0]===1?n.type="points":a[0]===2&&(n.type="lines"),this.currentLayer.geometry=n}parseTagStrings(e){this.tree.tags=this.reader.getStringArray(e)}parsePolygonTagMapping(e){var r=this.reader.offset+e,t=this.reader.getIDTag();t==="SURF"?this.parseMaterialIndices(r):this.reader.skip(e-4)}parseMaterialIndices(e){for(this.currentLayer.geometry.materialIndices=[];this.reader.offset<e;){var r=this.reader.getVariableLengthIndex(),t=this.reader.getUint16();this.currentLayer.geometry.materialIndices.push(r,t)}}parseUnknownCHUNK(e,r){console.warn("LWOLoader: unknown chunk type: "+e+" length: "+r);var t=this.reader.getString(r);this.currentForm[e]=t}}class Y{constructor(e){this.dv=new DataView(e),this.offset=0,this._textDecoder=new TextDecoder,this._bytes=new Uint8Array(e)}size(){return this.dv.buffer.byteLength}setOffset(e){e>0&&e<this.dv.buffer.byteLength?this.offset=e:console.error("LWOLoader: invalid buffer offset")}endOfFile(){return this.offset>=this.size()}skip(e){this.offset+=e}getUint8(){var e=this.dv.getUint8(this.offset);return this.offset+=1,e}getUint16(){var e=this.dv.getUint16(this.offset);return this.offset+=2,e}getInt32(){var e=this.dv.getInt32(this.offset,!1);return this.offset+=4,e}getUint32(){var e=this.dv.getUint32(this.offset,!1);return this.offset+=4,e}getUint64(){var e,r;return r=this.getUint32(),e=this.getUint32(),r*4294967296+e}getFloat32(){var e=this.dv.getFloat32(this.offset,!1);return this.offset+=4,e}getFloat32Array(e){for(var r=[],t=0;t<e;t++)r.push(this.getFloat32());return r}getFloat64(){var e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){for(var r=[],t=0;t<e;t++)r.push(this.getFloat64());return r}getVariableLengthIndex(){var e=this.getUint8();return e===255?this.getUint8()*65536+this.getUint8()*256+this.getUint8():e*256+this.getUint8()}getIDTag(){return this.getString(4)}getString(e){if(e===0)return;const r=this.offset;let t,s;return e?(s=e,t=this._textDecoder.decode(new Uint8Array(this.dv.buffer,r,e))):(s=this._bytes.indexOf(0,r)-r,t=this._textDecoder.decode(new Uint8Array(this.dv.buffer,r,s)),s++,s+=s%2),this.skip(s),t}getStringArray(e){var r=this.getString(e);return r=r.split("\0"),r.filter(Boolean)}}class j{constructor(){this.active=!1,this.depth=0,this.formList=[]}enable(){this.active=!0}log(){if(this.active){var e;switch(this.node){case 0:e="FORM";break;case 1:e="CHK";break;case 2:e="S-CHK";break}console.log("| ".repeat(this.depth)+e,this.nodeID,`( ${this.offset} ) -> ( ${this.dataOffset+this.length} )`,this.node==0?" {":"",this.skipped?"SKIPPED":"",this.node==0&&this.skipped?"}":""),this.node==0&&!this.skipped&&(this.depth+=1,this.formList.push(this.dataOffset+this.length)),this.skipped=!1}}closeForms(){if(this.active)for(var e=this.formList.length-1;e>=0;e--)this.offset>=this.formList[e]&&(this.depth-=1,console.log("| ".repeat(this.depth)+"}"),this.formList.splice(-1,1))}}function _(F){return F%2}function S(F){return F.length+1+(_(F.length+1)?1:0)}function Z(F,e,r){console.log(new TextDecoder().decode(new Uint8Array(F,e,r)))}let u;class ee extends M{constructor(e,r={}){super(e),this.resourcePath=r.resourcePath!==void 0?r.resourcePath:""}load(e,r,t,s){const a=this,i=a.path===""?J(e,"Objects"):a.path,c=e.split(i).pop().split(".")[0],n=new v(this.manager);n.setPath(a.path),n.setResponseType("arraybuffer"),n.load(e,function(o){try{r(a.parse(o,i,c))}catch(h){s?s(h):console.error(h),a.manager.itemError(e)}},t,s)}parse(e,r,t){u=new K().parse(e);const s=new L(this.manager).setPath(this.resourcePath||r).setCrossOrigin(this.crossOrigin);return new z(s).parse(t)}}class z{constructor(e){this.textureLoader=e}parse(e){return this.materials=new Q(this.textureLoader).parse(),this.defaultLayerName=e,this.meshes=this.parseLayers(),{materials:this.materials,meshes:this.meshes}}parseLayers(){const e=[],r=[],t=new q,s=this;return u.layers.forEach(function(a){const i=t.parse(a.geometry,a),c=s.parseMesh(i,a);e[a.number]=c,a.parent===-1?r.push(c):e[a.parent].add(c)}),this.applyPivots(r),r}parseMesh(e,r){let t;const s=this.getMaterials(e.userData.matNames,r.geometry.type);return r.geometry.type==="points"?t=new T(e,s):r.geometry.type==="lines"?t=new A(e,s):t=new O(e,s),r.name?t.name=r.name:t.name=this.defaultLayerName+"_layer_"+r.number,t.userData.pivot=r.pivot,t}applyPivots(e){e.forEach(function(r){r.traverse(function(t){const s=t.userData.pivot;if(t.position.x+=s[0],t.position.y+=s[1],t.position.z+=s[2],t.parent){const a=t.parent.userData.pivot;t.position.x-=a[0],t.position.y-=a[1],t.position.z-=a[2]}})})}getMaterials(e,r){const t=[],s=this;e.forEach(function(i,c){t[c]=s.getMaterialByName(i)}),(r==="points"||r==="lines")&&t.forEach(function(i,c){const n={color:i.color};r==="points"?(n.size=.1,n.map=i.map,t[c]=new R(n)):r==="lines"&&(t[c]=new P(n))});const a=t.filter(Boolean);return a.length===1?a[0]:t}getMaterialByName(e){return this.materials.filter(function(r){return r.name===e})[0]}}class Q{constructor(e){this.textureLoader=e}parse(){const e=[];this.textures={};for(const r in u.materials)u.format==="LWO3"?e.push(this.parseMaterial(u.materials[r],r,u.textures)):u.format==="LWO2"&&e.push(this.parseMaterialLwo2(u.materials[r],r,u.textures));return e}parseMaterial(e,r,t){let s={name:r,side:this.getSide(e.attributes),flatShading:this.getSmooth(e.attributes)};const a=this.parseConnections(e.connections,e.nodes),i=this.parseTextureNodes(a.maps);this.parseAttributeImageMaps(a.attributes,t,i,e.maps);const c=this.parseAttributes(a.attributes,i);this.parseEnvMap(a,i,c),s=Object.assign(i,s),s=Object.assign(s,c);const n=this.getMaterialType(a.attributes);return n!==m&&delete s.refractionRatio,new n(s)}parseMaterialLwo2(e,r){let t={name:r,side:this.getSide(e.attributes),flatShading:this.getSmooth(e.attributes)};const s=this.parseAttributes(e.attributes,{});return t=Object.assign(t,s),new m(t)}getSide(e){if(!e.side)return k;switch(e.side){case 0:case 1:return k;case 2:return C;case 3:return y}}getSmooth(e){return e.smooth?!e.smooth:!0}parseConnections(e,r){const t={maps:{}},s=e.inputName,a=e.inputNodeName,i=e.nodeName,c=this;return s.forEach(function(n,o){if(n==="Material"){const h=c.getNodeByRefName(a[o],r);t.attributes=h.attributes,t.envMap=h.fileName,t.name=a[o]}}),i.forEach(function(n,o){n===t.name&&(t.maps[s[o]]=c.getNodeByRefName(a[o],r))}),t}getNodeByRefName(e,r){for(const t in r)if(r[t].refName===e)return r[t]}parseTextureNodes(e){const r={};for(const t in e){const s=e[t],a=s.fileName;if(!a)return;const i=this.loadTexture(a);switch(s.widthWrappingMode!==void 0&&(i.wrapS=this.getWrappingType(s.widthWrappingMode)),s.heightWrappingMode!==void 0&&(i.wrapT=this.getWrappingType(s.heightWrappingMode)),t){case"Color":r.map=i,r.map.colorSpace=f;break;case"Roughness":r.roughnessMap=i,r.roughness=1;break;case"Specular":r.specularMap=i,r.specularMap.colorSpace=f,r.specular=16777215;break;case"Luminous":r.emissiveMap=i,r.emissiveMap.colorSpace=f,r.emissive=8421504;break;case"Luminous Color":r.emissive=8421504;break;case"Metallic":r.metalnessMap=i,r.metalness=1;break;case"Transparency":case"Alpha":r.alphaMap=i,r.transparent=!0;break;case"Normal":r.normalMap=i,s.amplitude!==void 0&&(r.normalScale=new U(s.amplitude,s.amplitude));break;case"Bump":r.bumpMap=i;break}}return r.roughnessMap&&r.specularMap&&delete r.specularMap,r}parseAttributeImageMaps(e,r,t){for(const s in e){const a=e[s];if(a.maps){const i=a.maps[0],c=this.getTexturePathByIndex(i.imageIndex,r);if(!c)return;const n=this.loadTexture(c);switch(i.wrap!==void 0&&(n.wrapS=this.getWrappingType(i.wrap.w)),i.wrap!==void 0&&(n.wrapT=this.getWrappingType(i.wrap.h)),s){case"Color":t.map=n,t.map.colorSpace=f;break;case"Diffuse":t.aoMap=n;break;case"Roughness":t.roughnessMap=n,t.roughness=1;break;case"Specular":t.specularMap=n,t.specularMap.colorSpace=f,t.specular=16777215;break;case"Luminosity":t.emissiveMap=n,t.emissiveMap.colorSpace=f,t.emissive=8421504;break;case"Metallic":t.metalnessMap=n,t.metalness=1;break;case"Transparency":case"Alpha":t.alphaMap=n,t.transparent=!0;break;case"Normal":t.normalMap=n;break;case"Bump":t.bumpMap=n;break}}}}parseAttributes(e,r){const t={};return e.Color&&!r.map?t.color=new d().fromArray(e.Color.value):t.color=new d,e.Transparency&&e.Transparency.value!==0&&(t.opacity=1-e.Transparency.value,t.transparent=!0),e["Bump Height"]&&(t.bumpScale=e["Bump Height"].value*.1),this.parsePhysicalAttributes(t,e,r),this.parseStandardAttributes(t,e,r),this.parsePhongAttributes(t,e,r),t}parsePhysicalAttributes(e,r){r.Clearcoat&&r.Clearcoat.value>0&&(e.clearcoat=r.Clearcoat.value,r["Clearcoat Gloss"]&&(e.clearcoatRoughness=.5*(1-r["Clearcoat Gloss"].value)))}parseStandardAttributes(e,r,t){r.Luminous&&(e.emissiveIntensity=r.Luminous.value,r["Luminous Color"]&&!t.emissive?e.emissive=new d().fromArray(r["Luminous Color"].value):e.emissive=new d(8421504)),r.Roughness&&!t.roughnessMap&&(e.roughness=r.Roughness.value),r.Metallic&&!t.metalnessMap&&(e.metalness=r.Metallic.value)}parsePhongAttributes(e,r,t){r["Refraction Index"]&&(e.refractionRatio=.98/r["Refraction Index"].value),r.Diffuse&&e.color.multiplyScalar(r.Diffuse.value),r.Reflection&&(e.reflectivity=r.Reflection.value,e.combine=x),r.Luminosity&&(e.emissiveIntensity=r.Luminosity.value,!t.emissiveMap&&!t.map?e.emissive=e.color:e.emissive=new d(8421504)),!r.Roughness&&r.Specular&&!t.specularMap&&(r["Color Highlight"]?e.specular=new d().setScalar(r.Specular.value).lerp(e.color.clone().multiplyScalar(r.Specular.value),r["Color Highlight"].value):e.specular=new d().setScalar(r.Specular.value)),e.specular&&r.Glossiness&&(e.shininess=7+Math.pow(2,r.Glossiness.value*12+2))}parseEnvMap(e,r,t){if(e.envMap){const s=this.loadTexture(e.envMap);t.transparent&&t.opacity<.999?(s.mapping=w,t.reflectivity!==void 0&&(delete t.reflectivity,delete t.combine),t.metalness!==void 0&&(t.metalness=1),t.opacity=1):s.mapping=E,r.envMap=s}}getTexturePathByIndex(e){let r="";return u.textures&&u.textures.forEach(function(t){t.index===e&&(r=t.fileName)}),r}loadTexture(e){return e?this.textureLoader.load(e,void 0,void 0,function(){console.warn("LWOLoader: non-standard resource hierarchy. Use `resourcePath` parameter to specify root content directory.")}):null}getWrappingType(e){switch(e){case 0:return console.warn('LWOLoader: "Reset" texture wrapping type is not supported in three.js'),N;case 1:return D;case 2:return V;case 3:return N}}getMaterialType(e){return e.Clearcoat&&e.Clearcoat.value>0?G:e.Roughness?W:m}}class q{parse(e,r){const t=new B;t.setAttribute("position",new b(e.points,3));const s=this.splitIndices(e.vertexIndices,e.polygonDimensions);return t.setIndex(s),this.parseGroups(t,e),t.computeVertexNormals(),this.parseUVs(t,r,s),this.parseMorphTargets(t,r,s),t.translate(-r.pivot[0],-r.pivot[1],-r.pivot[2]),t}splitIndices(e,r){const t=[];let s=0;return r.forEach(function(a){if(a<4)for(let i=0;i<a;i++)t.push(e[s+i]);else if(a===4)t.push(e[s],e[s+1],e[s+2],e[s],e[s+2],e[s+3]);else if(a>4){for(let i=1;i<a-1;i++)t.push(e[s],e[s+i],e[s+i+1]);console.warn("LWOLoader: polygons with greater than 4 sides are not supported")}s+=a}),t}parseGroups(e,r){const t=u.tags,s=[];let a=3;r.type==="lines"&&(a=2),r.type==="points"&&(a=1);const i=this.splitMaterialIndices(r.polygonDimensions,r.materialIndices);let c=0;const n={};let o,h,I=0,g=0;for(let p=0;p<i.length;p+=2){if(h=i[p+1],p===0&&(s[c]=t[h]),o===void 0&&(o=h),h!==o){let l;n[t[o]]?l=n[t[o]]:(l=c,n[t[o]]=c,s[c]=t[o],c++),e.addGroup(I,g,l),I+=g,o=h,g=0}g+=a}if(e.groups.length>0){let p;n[t[h]]?p=n[t[h]]:(p=c,n[t[h]]=c,s[c]=t[h]),e.addGroup(I,g,p)}e.userData.matNames=s}splitMaterialIndices(e,r){const t=[];return e.forEach(function(s,a){if(s<=3)t.push(r[a*2],r[a*2+1]);else if(s===4)t.push(r[a*2],r[a*2+1],r[a*2],r[a*2+1]);else for(let i=0;i<s-2;i++)t.push(r[a*2],r[a*2+1])}),t}parseUVs(e,r){const t=Array.from(Array(e.attributes.position.count*2),function(){return 0});for(const s in r.uvs){const a=r.uvs[s].uvs;r.uvs[s].uvIndices.forEach(function(c,n){t[c*2]=a[n*2],t[c*2+1]=a[n*2+1]})}e.setAttribute("uv",new b(t,2))}parseMorphTargets(e,r){let t=0;for(const s in r.morphTargets){const a=e.attributes.position.array.slice();e.morphAttributes.position||(e.morphAttributes.position=[]);const i=r.morphTargets[s].points,c=r.morphTargets[s].indices,n=r.morphTargets[s].type;c.forEach(function(o,h){n==="relative"?(a[o*3]+=i[h*3],a[o*3+1]+=i[h*3+1],a[o*3+2]+=i[h*3+2]):(a[o*3]=i[h*3],a[o*3+1]=i[h*3+1],a[o*3+2]=i[h*3+2])}),e.morphAttributes.position[t]=new b(a,3),e.morphAttributes.position[t].name=s,t++}e.morphTargetsRelative=!1}}function J(F,e){const r=F.indexOf(e);return r===-1?"./":F.slice(0,r)}export{ee as LWOLoader};
