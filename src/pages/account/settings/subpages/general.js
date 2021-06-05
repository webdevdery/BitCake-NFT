import React from 'react';
import CustomButton from '../../../../components/common/Button';
import {tokenSelector, userSelector} from '../../../../redux/auth/selector';
import {useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import {updateSettings} from '../../../../redux/auth/action';
import {useDispatch} from 'react-redux';

export default function GeneralPage() {
  const user = useSelector(userSelector);
  const token = useSelector(tokenSelector);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = (data) => {
    dispatch(updateSettings({token: token, data: data}));
  };

  return (
    user && (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full h-full p-10 space-y-8 max-w-3xl">
          <div className="text-4xl w-full">General Settings</div>

          <div className="w-full text-gray-600 font-medium space-y-2">
            <div className="text-lg">Username</div>
            <input
              type="text"
              className="w-full p-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light"
              defaultValue={user.name}
              placeholder="Name"
              {...register('Name', {required: true})}
            />
          </div>

          <div className="w-full text-gray-600 font-medium space-y-2">
            <div className="text-lg">Bio</div>
            <input
              type="text"
              className="w-full p-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light"
              placeholder="Tell the world your story!"
              defaultValue={user.bio}
              {...register('Bio', {required: true})}
            />
          </div>

          <div className="w-full text-gray-600 font-medium space-y-2">
            <div className="text-lg">Email Address</div>
            <input
              type="email"
              className="w-full p-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light"
              placeholder="Enter email"
              defaultValue={user.email}
              {...register('Email', {required: true, pattern: /^\S+@\S+$/i})}
            />
          </div>

          <CustomButton
            label="Save"
            type="submit"
            styled="solid"
            className="w-40 h-12"
          />
        </div>
      </form>
    )
  );
}
