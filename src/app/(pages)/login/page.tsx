'use client';

import React, { useState, useEffect } from 'react';
import { Loader2, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { FormErrors } from '@/types/auth';
import { loginUser, resetError } from '@/redux/api/auth/authSlice';

const Login: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, error, token } = useAppSelector((s) => s.auth);

  const [form, setForm] = useState({
    customer_id: '',
    zipcode: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (token) {
      router.push('/');
    }
  }, [token, router]);

  useEffect(() => {
    if (error) dispatch(resetError());
  }, [form, dispatch, error]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.customer_id.trim()) {
      newErrors.customer_id = 'Customer ID is required';
    }
    if (!form.zipcode.trim()) {
      newErrors.zipcode = 'Zipcode is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const result = await dispatch(loginUser(form));

    if (loginUser.rejected.match(result)) {
      const errMsg = result.payload as string;

      if (errMsg.includes('Validation failed')) {
        try {
          setErrors({
            general: 'Please check the fields below.',
          });
        } catch {
          setErrors({ general: errMsg });
        }
      } else {
        setErrors({ general: errMsg });
      }
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 p-12">
      <div className="w-full md:w-[460px] bg-white ring-1 ring-gray-200">
        <div className="relative pt-12 px-8 pb-12 overflow-y-auto">
          <div className="mx-auto">
            <div className="flex justify-between items-center">
              <p className="text-[20px] poppins-light text-[#161618]">Log In</p>
              <button
                type="button"
                onClick={() => router.push('/register')}
                className="text-[14px] poppins-light cursor-pointer flex items-center hover:text-blue-700 transition-colors"
              >
                <span>Create New Account</span>
                <ArrowRight className="inline-block w-5 h-5 ml-1" />
              </button>
            </div>

            <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <input
                  name="customer_id"
                  value={form.customer_id}
                  onChange={handleChange}
                  className={`w-full border text-base md:text-sm h-10 px-3 outline-none transition-all ${
                    errors.customer_id
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                      : 'border-gray-300 focus:border-gray-800 focus:ring-blue-500 focus:ring-opacity-20'
                  }`}
                  placeholder="Customer ID*"
                  type="text"
                />
                {errors.customer_id && (
                  <p className="mt-1 text-sm text-red-600">{errors.customer_id}</p>
                )}
              </div>

              <div>
                <input
                  name="zipcode"
                  value={form.zipcode}
                  onChange={handleChange}
                  className={`w-full border text-base md:text-sm h-10 px-3 outline-none transition-all ${
                    errors.zipcode
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                      : 'border-gray-300 focus:border-gray-800 focus:ring-blue-500 focus:ring-opacity-20'
                  }`}
                  placeholder="Zipcode*"
                  type="text"
                />
                {errors.zipcode && (
                  <p className="mt-1 text-sm text-red-600">{errors.zipcode}</p>
                )}
              </div>

              {errors.general && (
                <p className="text-sm text-red-600 bg-red-50 p-2 rounded">
                  {errors.general}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#161618] cursor-pointer text-white poppins-regular md:text-[22px] h-[55px] flex items-center justify-center gap-2 mt-5 hover:bg-gray-900 disabled:opacity-50 transition-all"
              >
                <span>Log In</span>
                {loading && <Loader2 className="w-6 h-6 animate-spin" />}
              </button>
            </form>
          </div>
        </div>

        <div className="bg-[#DDDDDD] text-center py-3 text-base flex flex-wrap justify-center items-center gap-1">
          <span className="poppins-light text-[16px]">Don't have an account?</span>
          <button
            type="button"
            onClick={() => router.push('/register')}
            className="flex items-center cursor-pointer text-[#161618] hover:text-blue-700 transition-colors"
          >
            <span className="font-semibold poppins-semibold">Register Now</span>
            <ArrowRight className="inline-block w-5 h-5 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;