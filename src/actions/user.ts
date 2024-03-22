/* eslint-disable @typescript-eslint/no-unused-vars */
'use server';

import { z } from 'zod';

import { getUserProfile } from '@/data-source/user';
import { action } from '@/lib/safe-action';

const schema = z.object({});

// export const getUserInfoAction = action(schema, getUserProfile);
