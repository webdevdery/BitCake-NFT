import React, {useEffect, useState} from 'react';
import NFTDropzone from '../components/common/nftDropzone';
import {Editor} from '@tinymce/tinymce-react';
import CurrencyInput from 'react-currency-input-field';
import Switch from 'react-switch';
import CustomButton from '../components/common/Button';
import CreatableSelect from 'react-select/creatable';
import TagInput from '../components/common/taginput';
import {
  categories,
  subCategories,
  priceTypes,
  auctionlengths,
} from '../constants/create';
import {useSelector} from 'react-redux';
import CustomListBox from '../components/common/customlistbox';
import axios from 'axios';
import {tokenSelector, userSelector} from '../redux/auth/selector';
import {getCollections} from '../services/collection';
import {createNotification} from '../App';
// import ipfs from '../utils/ipfs';
// import {useWeb3React} from '@web3-react/core';
// import {Web3Provider} from '@ethersproject/providers';
// import {InjectedConnector} from '@web3-react/injected-connector';

const ethRate = 2476.96;

const uploadFile = async (file, type, extension, token) => {
  const data = new FormData();
  data.append('file', file);
  data.append('type', type);
  data.append('extension', extension);
  data.append('token', token);
  const res = await axios.post(
    process.env.REACT_APP_API_PATH + `/api/v1/private/upload/file`,
    data,
    {
      'Content-Type': 'multipart/form-data',
    }
  );
  return res.data.result;
};

export default function CreatePage() {
  const user = useSelector(userSelector);
  const token = useSelector(tokenSelector);

  const [mainCategory, setmainCategory] = useState(categories[0]);
  const [subCategory, setsubCategory] = useState(subCategories[0]);
  const [newCollection, setnewCollection] = useState(false);
  const [collection, setcollection] = useState();
  const [tags, settags] = useState([]);
  const [title, settitle] = useState('');
  const [imagefile, setimageFile] = useState();
  const [videofile, setvideoFile] = useState();
  const [audiofile, setaudioFile] = useState();
  const [collectionfile, setcollectionfile] = useState();
  const [isattach, setisattach] = useState(false);
  const [attachfile, setattachfile] = useState();
  const [description, setdescription] = useState();
  const [pricetype, setpricetype] = useState(priceTypes[0]);
  const [currencytype, setcurrencytype] = useState(false);
  const [price, setprice] = useState(0);
  const [buynowprice, setbuynowprice] = useState(0);
  const [auctionlength, setauctionlength] = useState(auctionlengths[0]);
  const [collectionList, setcollectionList] = useState([]);

  useEffect(() => {
    async function init() {
      const collections = await getCollections(user.id);
      let allCollections = [];
      collections.data.result.length &&
        collections.data.result.map((item) =>
          allCollections.push({id: item.id, label: item.title})
        );
      setcollectionList(allCollections);
    }
    init();
  }, [user.id]);

  // console.log(token);
  // if(!token)
  //   return <Redirect to="/login" />

  const handleChange = (newValue, actionMeta) => {
    setcollection(newValue);
    if (actionMeta.action === 'create-option') {
      setnewCollection(true);
    } else setnewCollection(false);
  };

  const handleSubmit = async () => {
    let imagepath =
      imagefile &&
      (await uploadFile(
        imagefile,
        'image',
        imagefile.type.split('/')[1],
        token
      ));
    let audiopath =
      audiofile &&
      (await uploadFile(
        audiofile,
        'audio',
        audiofile.type.split('/')[1],
        token
      ));
    let videopath =
      videofile &&
      (await uploadFile(
        videofile,
        'video',
        videofile.type.split('/')[1],
        token
      ));
    let collectionpath =
      collectionfile &&
      (await uploadFile(
        collectionfile,
        'collection',
        collectionfile.type.split('/')[1],
        token
      ));
    let attachpath =
      attachfile &&
      (await uploadFile(
        attachfile,
        'attach',
        attachfile.type.split('/')[1],
        token
      ));
    const nftdata = {
      maincategory: mainCategory.name,
      subcategory: subCategory.name,
      collectiontype: newCollection,
      collection: collection,
      title: title,
      tags: tags,
      imagepath: imagepath ?? '',
      videopath: videopath ?? '',
      audiopath: audiopath ?? '',
      collectionpath: collectionpath ?? '',
      isattach: false,
      attachpath: attachpath ?? '',
      description: description,
      transfercopyright: false,
      currencytype: currencytype === false ? 'usd' : 'eth',
      pricetype: pricetype.name,
      price: price,
      buynowprice: buynowprice,
      auctionlength: auctionlength.value,
    };
    console.log('=======', nftdata);
    const res = await axios.post(
      `${process.env.REACT_APP_API_PATH}/api/v1/private/create`,
      {
        token: token,
        data: nftdata,
      }
    );
    console.log(res);
    if (res.data.result === 'success')
      createNotification('success', 'NFT created successfully');
    else createNotification('error', res.data.result);
  };

  return (
    <div className="w-full pt-20 pb-20 text-center lg:text-left flex flex-wrap">
      <div className="w-full border-b border-gray-400 py-2 text-gray-700 font-bold text-3xl text-center">
        Create and List an item for sale
      </div>
      <div className="w-full space-y-6 p-4">
        <div className="w-full space-y-2">
          <div className="text-md text-gray-600 font-semibold">
            Select Category
          </div>
          <div className="w-full">
            <CustomListBox
              value={mainCategory}
              onChange={setmainCategory}
              data={categories}
            />
          </div>
        </div>

        <div className="w-full space-y-2">
          <div className="text-md text-gray-600 font-semibold">
            Select Sub Category
          </div>
          <div className="w-full">
            <CustomListBox
              value={subCategory}
              onChange={setsubCategory}
              data={subCategories}
            />
          </div>
        </div>

        <div className="w-full space-y-2">
          <div className="text-md text-gray-600 font-semibold">
            Select Collection
          </div>
          <div className="w-full">
            <CreatableSelect
              isClearable
              placeholder="Create or select collection"
              onChange={handleChange}
              // onInputChange={this.handleInputChange}
              options={collectionList}
              className="z-10 text-sm rounded-lg shadow-md border-gray-600 cursor-pointer"
              classNamePrefix="react-select"
            />
          </div>
        </div>

        <div className="w-full space-y-2">
          <div className="text-md text-gray-600 font-semibold">
            Listing Title
          </div>
          <input
            type="text"
            className="p-1 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light w-full"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
        </div>

        <div className="w-full space-y-2">
          <div className="text-md text-gray-600 font-semibold">Tags ( # )</div>
          <TagInput
            tags={tags}
            onChange={(newTags) => {
              settags(newTags);
            }}
          />
        </div>

        <div className="w-full space-y-2">
          <div className="text-md text-gray-600 font-semibold">
            Upload item preview images
            <br />
            <div className="text-sm">
              The first preview image you upload will be displayed on all
              wallets as the token image!
            </div>
            <div className="font-bold">
              NOTE: Upload audio only if you are selling an audio NFT.{' '}
            </div>
          </div>
          <div className="w-full border-dashed border-2 rounded-md border-gray-300 flex items-center justify-center cursor-pointer">
            <NFTDropzone
              nftType="Image"
              onChange={(newfile) => {
                newfile.type.startsWith('video')
                  ? setvideoFile(newfile)
                  : setimageFile(newfile);
              }}
            />
            {mainCategory.name === 'Audio' && (
              <NFTDropzone
                nftType={mainCategory}
                onChange={(newfile) => {
                  setaudioFile(newfile);
                }}
              />
            )}
            {newCollection && (
              <NFTDropzone
                nftType="Collection"
                onChange={(newfile) => {
                  setcollectionfile(newfile);
                }}
              />
            )}
          </div>
        </div>

        <div className="w-full cursor-pointer flex items-center space-x-3">
          <input
            type="checkbox"
            className="cursor-pointer w-5 h-5 focus:outline-none border rounded-md focus:ring-none checked:bg-primary-dark checked: border-none"
            checked={isattach}
            onChange={() => {
              setisattach(!isattach);
            }}
          />
          <span>Attach a private file/unlockable content?</span>
        </div>
        {isattach && (
          <NFTDropzone
            nftType={'all'}
            onChange={(newfile) => {
              setattachfile(newfile);
            }}
          />
        )}

        <div className="w-full space-y-2">
          <span>Item description</span>
          <Editor
            init={{
              height: 400,
              menubar: false,
              plugins: 'link image code',
              toolbar:
                'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
              placeholder:
                'The better the description the higher chance of selling your item...',
            }}
            onChange={(e) => {
              setdescription(e.target.getContent());
            }}
          />
        </div>

        <div className="w-full cursor-pointer flex items-center space-x-3">
          <input type="checkbox" className="cursor-pointer w-5 h-5" />
          <span>Transfer Copyright when purchased?</span>
        </div>
      </div>
      <div className="w-full space-y-6 p-4 pt-10">
        <div className="text-xl font-bold w-full pb-3 border-b border-gray-400">
          Price and type
        </div>

        <div className="w-full">
          <CustomListBox
            value={pricetype}
            onChange={setpricetype}
            data={priceTypes}
          />
        </div>

        <div className="w-full grid grid-cols-2">
          <div className="space-y-4">
            <div className="w-full text-md font-bold">
              {pricetype.name === 'Fixed'
                ? 'Fixed price'
                : 'Starting Bid Price'}{' '}
              - in {currencytype === false ? 'USD' : 'ETH'}
            </div>

            <div className="w-full flex flex-wrap items-center space-y-3">
              <div className="w-full flex items-center">
                <CurrencyInput
                  defaultValue={0}
                  decimalsLimit={6}
                  onValueChange={(value, name) => {
                    setprice(value);
                  }}
                  className="p-1 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light w-40"
                />
                <span className="text-md px-3">
                  {currencytype === false ? '$' : 'eth'}
                </span>
                <label className="flex items-center">
                  <Switch
                    onChange={() => {
                      setcurrencytype(!currencytype);
                    }}
                    checked={currencytype}
                    height={26}
                  />
                </label>
              </div>
              {currencytype === false && (
                <div className="w-full">
                  <div className="text-md text-primary-dark flex">
                    Price in ETH:
                    <div className="pl-2">{(price / ethRate).toFixed(6)}</div>
                  </div>
                  <div className="text-md flex">
                    current ETH price: 1 ETH = $<div>{ethRate}</div>
                  </div>
                </div>
              )}
              {currencytype === true && (
                <div className="w-full">
                  <div className="text-md text-primary-dark flex">
                    Price in USD:
                    <div className="pl-2">{(price * ethRate).toFixed(2)}</div>
                  </div>
                  <div className="text-md flex">
                    current ETH price: 1 ETH = $<div>{ethRate}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {pricetype.name === 'Auction with Buy Now' && (
            <div className="space-y-4">
              <div className="w-full text-md font-bold">
                Buy Now Price - in {currencytype === false ? 'USD' : 'ETH'}
              </div>

              <div className="w-full flex flex-wrap items-center space-y-3">
                <div className="w-full flex items-center">
                  <CurrencyInput
                    defaultValue={0}
                    decimalsLimit={6}
                    onValueChange={(value, name) => {
                      setbuynowprice(value);
                    }}
                    className="p-1 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light w-40"
                  />
                  <span className="text-md px-3">
                    {currencytype === false ? '$' : 'eth'}
                  </span>
                </div>
                {currencytype === false && (
                  <div className="w-full">
                    <div className="text-md text-primary-dark flex">
                      Price in ETH:
                      <div className="pl-2">
                        {(buynowprice / ethRate).toFixed(6)}
                      </div>
                    </div>
                  </div>
                )}
                {currencytype === true && (
                  <div className="w-full">
                    <div className="text-md text-primary-dark flex">
                      Price in USD:
                      <div className="pl-2">
                        {(buynowprice * ethRate).toFixed(2)}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="w-full max-w-lg">
          <div className="space-y-4">
            <div className="w-full text-md font-bold">Auction length</div>
            <div className="w-full">
              <CustomListBox
                value={auctionlength}
                onChange={setauctionlength}
                data={auctionlengths}
              />
            </div>
          </div>
        </div>
        <CustomButton
          label="LIST THIS ITEM"
          styled="solid"
          onClick={() => {
            handleSubmit();
          }}
        />
      </div>
    </div>
  );
}
