

# Đề tài tiểu luận chuyên ngành Công nghệ phần mềm (HK1-2021/2022): 

<div>
  <h1 align="center"><a href="https://doublet.vercel.app">Xây dựng website bán giày thể thao sử dụng công nghệ MERN Stack 🚀 </a></h1>


**Nhóm sinh viên thực hiện (Hệ đại trà)**
1. Lê Đức Tân - 18110360
2. Nguyễn Văn Tân - 18110361

  <p>
    Website bán giày thể thao được xây dựng trên công nghệ MERN Stack mạnh mẽ, đa nhiệm đủ các chức năng cần thiết của một web site thương mại điện tử như xác thực người dùng, xem chi tiết sản phẩm, quản lý giỏ hàng, tư vấn hỏi đáp, cập nhật thông tin cá nhân và thanh toán ( bằng tiền mặt và bằng Momo ), những vấn đề trọng tâm cần kiểm thử kỹ lưỡng như phần xác thực người dùng , phần thanh toán. Đây là các phần trọng điểm để tránh các vấn đề trong giao dịch cũng như giảm thiểu việc hệ thống bị tấn công. 
  </p>

  <a href="https://doublet.vercel.app">
    <img
      alt="Mern stack"
      src="https://res.cloudinary.com/dmtopd6ps/image/upload/v1640654846/epv55hgtsfi8csprpj9u_cgfnwh.jpg"
    />
  </a>
</div>

<hr />

## Tiền điều kiện

- Bạn cần phải có trải nghiệm về NodeJS, ReactJs... trước khi xem qua tài liệu này. Các cấu trúc của project là một mảng kiến thức rộng cần tìm hiểu kỹ.

## Hệ thống yêu cầu

- [git][git] v2.13 hoặc cao hơn
- [NodeJS][node] `12 || 14 || 15 || 16 || 17`
- [npm][npm] v6 hoặc hơn

Để chắc chắn hệ thống của bạn có thể hoạt động chính xác, bạn cần kiểm tra lại version của các công cụ hỗ trợ thông qua các câu lệnh dưới đây trên cmd hoặc bash.

```shell
git --version
node --version
npm --version
```

Nếu có bất kì lỗi gì về đường dẫn hãy bấm vào link bên đây để fix [windows][win-path] hoặc
[mac/linux][mac-path].

## Demo

Hệ thống đã được deploy trên giao diện client [https://doublet.vercel.app](https://doublet.vercel.app) và giao diện admin [https://admin-doublet.vercel.app](https://admin-doublet.vercel.app)

## Hướng dẫn cài đặt

Sau khi đã setup thành công môi trường và các công cụ cần thiệt chúng ta chỉ cần vài dòng lệnh cơ bản để khởi tạo project:

```
git clone https://github.com/tandev151/SportswearWebsite_TLCN.git
cd SportswearWebsite_TLCN
``` 
Sau khi đã clone về thành công chúng ta tiến hành setup và run từng modules đầu tiên là chạy server
```
cd backend
npm install
npm run dev
```

Lưu ý câu lệnh npm install có thể mất vài phút để hệ thống cài đặt các package cần thiết 

Sau khi đã khởi chạy server thành công chúng ta tiến thành cài đặt và run client. 
Hãy nhớ là vị trí folder chúng ta đang đứng là bên trong SportswearWebsite_TLCN. Nếu bạn đang đứng trong folder backend  hãy thực hiện câu lệnh: 
```
cd ..
```
Sau khi đã chắc chắn ở đúng folder thực hiện câu lệnh
```
cd client
npm install
npm start
```

Tương tự với phần client phần giao diện admin cũng vậy. Hãy chắc chắn bạn đã đứng tại folder SportswearWebsite_TLCN.
```
cd admin
npm install
npm start
```

Nếu bạn có bất kì lỗi gì khi khởi chạy liên hệ chúng tôi ngay.




Cảm ơn đã ghé thăm, nếu thấy hay hãy cho chúng tôi 1 sao nhá <3 !



<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
<!-- prettier-ignore-end -->
