import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// バリデーションスキーマ
const contactSchema = z.object({
  inquiryType: z.string().min(1, 'お問い合わせ種別を選択してください'),
  companyName: z.string().min(1, '医院名・ラボ名を入力してください'),
  contactName: z.string().min(1, 'ご担当者名を入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  phone: z.string().optional(),
  message: z.string().min(1, 'お問い合わせ内容を入力してください'),
  privacyAgreed: z.boolean().refine(val => val === true, 'プライバシーポリシーに同意してください')
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // バリデーション
    const validatedData = contactSchema.parse(body);
    
    // ここでメール送信やデータベース保存の処理を行う
    console.log('Contact form data:', validatedData);
    
    // 成功レスポンス
    return NextResponse.json(
      { 
        success: true, 
        message: 'お問い合わせありがとうございます。2営業日以内にご連絡いたします。' 
      },
      { status: 200 }
    );
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: '入力内容に不備があります',
          errors: error.errors 
        },
        { status: 400 }
      );
    }
    
    console.error('Contact API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'サーバーエラーが発生しました。しばらく後にもう一度お試しください。' 
      },
      { status: 500 }
    );
  }
}