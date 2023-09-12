'use client'

import { Purchase } from '@/app/purchases/models/purchase.models'
import { Button } from '@/components/ui/button'
import { changeStatus } from '@/app/purchases/services/purchase.services'
import { useRouter } from 'next/navigation'
import { useState } from 'react'