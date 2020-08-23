using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using plugApi.Models;

namespace plugApi.Controllers
{
    [Route("api/container")]
    public class ContainerController : Controller
    {
        private readonly IContainerRepositorio _repositorio;

        public ContainerController(IContainerRepositorio repositorio)
        {
            _repositorio = repositorio;
        }

        [HttpGet]
        public IEnumerable<ContainerItem> GetAll()
        {
            return _repositorio.GetAll();
        }

        [HttpGet("{cod_iso}", Name="GetContainer")]
        public IActionResult GetById(string cod_iso)
        {
            var item = _repositorio.Find(cod_iso);
            if (item == null)
                return new ObjectResult(item);
            return new ObjectResult(item);

        }

        [HttpPost]
        public IActionResult Create([FromBody] ContainerItem item)
        {
            if (item == null)
                return BadRequest();
            var existente = _repositorio.Find(item.cod_iso);
            if (existente != null)
                return BadRequest("Container já cadastrado.");
            _repositorio.Add(item);
            return CreatedAtRoute("GetContainer", new { item.cod_iso }, item);
        }

        [HttpPut]
        public IActionResult Update(string cod_iso, [FromBody] ContainerItem item)
        {
            if (item == null || item.cod_iso != cod_iso)
                return BadRequest();

            var container = _repositorio.Find(cod_iso);
            if (container == null)
                return NotFound();
            container.plug_out = item.plug_out;
            _repositorio.Update(container);
            return new NoContentResult();
        }

        [HttpDelete("{cod_iso}")]
        public IActionResult Delete (string cod_iso)
        {
            var container = _repositorio.Find(cod_iso);
            if (container == null)
                return NotFound();
            _repositorio.Remove(cod_iso);
            return new NoContentResult();
        }

    }
}
